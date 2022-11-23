import { ActivityIndicator, PressableProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'
import React from 'react'
import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps extends PressableProps {
  title: string
  isDisabled?: boolean
  variant?: string
  icon?: keyof typeof Ionicons.glyphMap | undefined | null
}

export function ButtonSocial({
  title,
  isDisabled,
  icon,
  ...rest
}: ButtonProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container {...rest} disabled={isDisabled}>
      {isDisabled ? (
        <ActivityIndicator />
      ) : (
        <>
          {icon && (
            <Ionicons name={icon} color={COLORS.GRAY_200} size={RFValue(20)} />
          )}
          <S.Text>{title}</S.Text>
        </>
      )}
    </S.Container>
  )
}
