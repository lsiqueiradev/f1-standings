import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const HeaderContainer = styled.View`
  padding: 20px;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_700}; */

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const HeaderContent = styled.View``

export const HeaderContentRaceRound = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(16)}px;
  margin-bottom: 4px;
`

export const HeaderContentRaceName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${RFValue(14)}px;
  margin-bottom: 2px;
`

export const HeaderContentRaceDate = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${RFValue(14)}px;
`

export const Country = styled.Image`
  width: 60px;
  height: 60px;
`
