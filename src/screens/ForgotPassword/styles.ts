import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  paddingHorizontal: 20,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const LogoContainer = styled.View`
  margin-top: 100px;

  flex-direction: row;
  justify-content: center;

  margin-bottom: 30px;
`

export const LogoLeft = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${RFValue(30)}px;
`
export const LogoRight = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(30)}px;
`

export const Form = styled.View`
  align-items: center;
`

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 30px;
`
