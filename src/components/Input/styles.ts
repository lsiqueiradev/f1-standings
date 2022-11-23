import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Feather from '@expo/vector-icons/Feather'

interface Props {
  isFocused: boolean
}

export const Container = styled.View`
  margin-bottom: ${RFValue(17)}px;
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 4px;
`

export const Error = styled.Text`
  color: #e83f5b;
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${RFValue(13)}px;
`

export const InputContainer = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 15px;
  border-radius: 4px;
  height: 50px;
  width: 100%;

  background: ${({ theme, isFocused }) =>
    isFocused ? theme.COLORS.GRAY_900 : theme.COLORS.GRAY_700};
  border: 2px
    ${({ theme, isFocused }) =>
      isFocused ? theme.COLORS.PRIMARY : theme.COLORS.GRAY_700};
`

export const FormInput = styled(TextInput)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(15)}px;
  flex: 1;
  height: 100%;
`

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
  width: 50px;
  height: 100%;

  align-items: center;
  justify-content: center;
`

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))`
  opacity: 0.6;
`
