import { Loading } from '@components/Loading'
import { useAuth } from '@hooks/useAuth'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import Background from '@components/Background'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useTheme } from 'styled-components'

export function Routes() {
  const { COLORS } = useTheme()
  const { user, isFetchUserLoading } = useAuth()

  if (isFetchUserLoading) {
    return <Loading />
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.GRAY_900,
    },
  }

  return (
    <Background>
      <NavigationContainer theme={MyTheme}>
        {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Background>
  )
}
