import { createContext, ReactNode, useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import * as AppleAuthentication from 'expo-apple-authentication'

import { api } from '@services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'

interface User {
  id: string
  name: string
  email: string
  password_reset_token: string
  password_reset_expires: Date
  provider: string
  avatar_url: string
  status: boolean
  created_at: Date
  updated_at: Date
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}

export interface AuthContextDataProps {
  user: User
  isFetchUserLoading: boolean
  isUserLoading: boolean
  isUserLoadingGoogle: boolean
  isUserLoadingApple: boolean
  // isUserLoadingFacebook: boolean
  signOut: () => Promise<void>
  signIn: (crenditals: SignInCredentials) => Promise<void>
  signInWithGoogle(): Promise<void>
  signInWithApple(): Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [isUserLoading, setIsUserLoading] = useState(false)
  const [isUserLoadingGoogle, setIsUserLoadingGoogle] = useState(false)
  const [isUserLoadingApple, setIsUserLoadingApple] = useState(false)
  const [isFetchUserLoading, setIsFetchUserLoading] = useState(false)
  // const [isUserLoadingFacebook, setIsUserLoadingFacebook] = useState(false)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      setIsFetchUserLoading(true)
      const [token, user] = await AsyncStorage.multiGet([
        '@app:token',
        '@app:user',
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.common.Authorization = `${token[1]}`

        setData({ token: token[1], user: JSON.parse(user[1]) })
      }

      setIsFetchUserLoading(false)
    }

    loadStorageData()
  }, [])

  async function signInWithGoogle() {
    try {
      setIsUserLoadingGoogle(true)
      AuthSession.makeRedirectUri({ useProxy: false, isTripleSlashed: true })
      const CLIENT_ID =
        '196694840060-g2o67vm4o33u3aaa8lia6adamalaudes.apps.googleusercontent.com'
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')
      const REDIRECT_URI = 'https://auth.expo.io/@lsiqueiradev/f1-standings'

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse

      if (type === 'success') {
        const googleResponse: any = await api.get(
          'https://www.googleapis.com/oauth2/v2/userinfo',
          {
            headers: {
              Authorization: `Bearer ${params.access_token}`,
            },
          },
        )

        const { data } = await api.post('/login/oauth', {
          email: googleResponse.data.email,
          name: googleResponse.data.name,
          avatar_url: googleResponse.data.picture,
          access_token: params.access_token,
          provider: 'google',
        })

        const { user, token } = data

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        await AsyncStorage.multiSet([
          ['@app:token', token],
          ['@app:user', JSON.stringify(user)],
        ])

        setData({
          token,
          user,
        })
      }
    } catch (err: any) {
      console.log(err.response)
      throw new Error(err)
    } finally {
      setIsUserLoadingGoogle(false)
    }
  }

  async function signInWithApple() {
    try {
      setIsUserLoadingApple(true)
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      })

      if (credential) {
        const { data } = await api.post('/login/oauth', {
          email: credential.email,
          name: credential.fullName!.givenName,
          access_token: credential.identityToken,
          provider: 'apple',
        })

        const { user, token } = data

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        await AsyncStorage.multiSet([
          ['@app:token', token],
          ['@app:user', JSON.stringify(user)],
        ])

        setData({
          token,
          user,
        })
      }
    } catch (err: any) {
      if (err.code !== 'ERR_CANCELED') {
        throw new Error(err)
      }
    } finally {
      setIsUserLoadingApple(false)
    }
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      setIsUserLoading(true)

      const { data } = await api.post('/login', {
        email,
        password,
      })

      const { user, token } = data

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      await AsyncStorage.multiSet([
        ['@app:token', token],
        ['@app:user', JSON.stringify(user)],
      ])

      setData({
        token,
        user,
      })
    } catch (err: any) {
      console.log('err', err.response.data)
      showMessage({
        message: 'Invalid credentials',
        type: 'danger',
      })
      // throw err
    } finally {
      setIsUserLoading(false)
    }
  }

  async function signOut() {
    setData({} as AuthState)
    await AsyncStorage.multiRemove(['@app:user', '@app:token'])
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isFetchUserLoading,
        isUserLoading,
        isUserLoadingGoogle,
        isUserLoadingApple,
        // isUserLoadingFacebook,
        user: data.user,
        signInWithApple,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
