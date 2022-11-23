import { KeyboardAvoidingView, Platform } from 'react-native'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import * as S from './styles'

export default function ForgotPassword() {
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
          <S.Heading>Recupere sua senha</S.Heading>

          <Input
            title="E-mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Button title="Recuperar" />
        </S.Form>
      </S.Container>
    </KeyboardAvoidingView>
  )
}
