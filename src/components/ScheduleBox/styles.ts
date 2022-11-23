import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface MonthTextProps {
  size: number
}

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  padding: 10px 10px 10px 0;

  flex-direction: row;
`

export const DateContent = styled.View`
  align-items: center;
  justify-content: center;
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-right: 12px;

  width: 80px;
`

export const DateContentDay = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(12)}px;
`

export const DateContentMonth = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 20px;
  padding: 1px 6px;
  margin-top: 4px;
`

export const DateContentMonthText = styled.Text<MonthTextProps>`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ size }) => RFValue(size)}px;
  text-transform: uppercase;
`

export const RoundContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const RoundContentImage = styled.Image`
  width: 50px;
  height: 50px;
`

export const RoundContentInfos = styled.View`
  margin-left: 10px;
`

export const RoundContentInfosRound = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`

export const RoundContentInfosTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(14)}px;
`

export const RoundContentInfosSubtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${RFValue(12)}px;
`
