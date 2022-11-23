import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useAuth } from '@hooks/useAuth'

import { KeyboardAvoidingView, Platform } from 'react-native'

import * as S from './styles'

type FormDataProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup
    .string()
    .required('Informe o número.')
    .min(5, 'O número deve ter pelo menos 5 dígitos.'),
  password: yup
    .string()
    .required('Informe a senha.')
    .min(5, 'A senha deve ter pelo menos 5 dígitos.'),
})

export default function SignIn() {
  const { navigate } = useNavigation()

  const {
    signIn,
    isUserLoading,
    isUserLoadingGoogle,
    isUserLoadingApple,
    signInWithGoogle,
    signInWithApple,
  } = useAuth()

  const handleForgotPassword = useCallback(() => {
    navigate('forgot-password')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: 'lucas@lsiqueira.dev',
      password: 'password',
    },
  })

  function handleSignIn({ email, password }: FormDataProps) {
    signIn({ email, password })
  }

  function handleSignInGoogle() {
    signInWithGoogle()
  }

  function handleSignInApple() {
    signInWithApple()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <S.Container>
        <S.LogoContainer>
          <S.LogoLeft>F1</S.LogoLeft>
          <S.LogoRight>Standings</S.LogoRight>
        </S.LogoContainer>

        <S.Form>
          <S.Heading>Acesse sua conta</S.Heading>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                title="Email"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input
                title="Senha"
                placeholder="Senha"
                secureTextEntry
                onSubmitEditing={handleSubmit(handleSignIn)}
                returnKeyType="send"
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
              />
            )}
          />

          <Button
            title="Acessar"
            onPress={handleSubmit(handleSignIn)}
            isDisabled={isUserLoading}
          />
        </S.Form>

        <S.ForgotPasswordContainer>
          <S.ForgotPasswordButton onPress={handleForgotPassword}>
            <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
          </S.ForgotPasswordButton>
        </S.ForgotPasswordContainer>

        <S.OrBox>
          <S.OrBoxSplit />
          <S.OrBoxText>ou</S.OrBoxText>
          <S.OrBoxSplit />
        </S.OrBox>

        <S.ButtonSocialContent>
          <S.ButtonGoogleSignIn
            onPress={handleSignInGoogle}
            title="Continuar com Google"
            variant="social"
            isDisabled={isUserLoadingGoogle}
            icon="logo-google"
          />
          <S.ButtonAppleSignIn
            title="Continuar com Apple"
            variant="social"
            onPress={handleSignInApple}
            isDisabled={isUserLoadingApple}
            icon="logo-apple"
          />
        </S.ButtonSocialContent>
      </S.Container>
    </KeyboardAvoidingView>
  )
}
