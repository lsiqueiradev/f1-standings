import { ActivityIndicator, PressableProps } from 'react-native'

import * as S from './styles'
import React from 'react'

interface ButtonProps extends PressableProps {
  title: string
  isDisabled?: boolean
  variant?: string
}

export function Button({ title, isDisabled, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest} disabled={isDisabled}>
      {isDisabled ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <S.Text>{title}</S.Text>
      )}
    </S.Container>
  )
}
