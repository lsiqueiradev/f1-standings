import { RFValue } from 'react-native-responsive-fontsize'
import { Pressable, PressableProps } from 'react-native'

import styled from 'styled-components/native'

interface ButtonProps extends PressableProps {}

export const Container = styled(Pressable)<ButtonProps>`
  width: 100%;
  height: 50px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;

  flex-direction: row;

  border-width: 2px;

  background-color: transparent;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(13)}px;
  margin-left: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`
