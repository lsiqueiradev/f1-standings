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

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-color: ${({ theme }) => theme.COLORS.PRIMARY}; ;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
