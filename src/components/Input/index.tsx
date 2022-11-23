import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import * as S from './styles'

interface Props extends TextInputProps {
  title: string
  error?: string | null
}

export function Input({
  title,
  error = null,
  secureTextEntry,
  ...rest
}: Props) {
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <S.InputContainer isFocused={isFocused}>
        <S.FormInput
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          secureTextEntry={secureTextEntry && passwordHidden}
        />
        {secureTextEntry && (
          <S.ToggleShowPassButton
            onPress={() => setPasswordHidden(!passwordHidden)}
          >
            <S.Icon name={passwordHidden ? 'eye-off' : 'eye'} />
          </S.ToggleShowPassButton>
        )}
      </S.InputContainer>

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
