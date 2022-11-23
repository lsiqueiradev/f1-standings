import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const CircuitContainer = styled.View`
  padding: 20px;
`

export const CircuitTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(14)}px;
  margin-bottom: 30px;
`
export const CircuitMap = styled.View`
  align-items: center;
  justify-content: center;
`

export const Circuit = styled.Image`
  width: 100%;
  height: 220px;
`

export const WeekendContainer = styled.View`
  padding: 20px 20px 8px;
`

export const WeekendItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const WeekendItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(12)}px;
`

export const WeekendItemContent = styled.View`
  align-items: flex-end;
`

export const WeekendItemDate = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(12)}px;
`

export const WeekendItemHour = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(12)}px;
`

export const InformationsContainer = styled.View`
  padding: 20px 20px 40px;
`

export const InformationsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(14)}px;
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
  font-size: ${RFValue(12)}px;
`

export const InformationsItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(16)}px;
`

export const InformationsItemSmall = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${RFValue(12)}px;
`
