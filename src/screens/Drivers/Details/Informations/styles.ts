import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const InformationsContainer = styled.View`
  padding: 20px 20px 40px;
`

export const InformationsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(12)}px;
  margin-bottom: 20px;
`

export const InformationsRow = styled.View`
  flex-direction: row;
`

export const InformationsItem = styled.View`
  margin-right: 80px;
  margin-bottom: 20px;
`

export const InformationsItemSpan = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${RFValue(10)}px;
`

export const InformationsItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(12)}px;
`

export const InformationsItemSmall = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${RFValue(10)}px;
`
