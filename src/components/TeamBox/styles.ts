import styled from 'styled-components/native'

import { CaretRight } from 'phosphor-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import CountryFlag from 'react-native-country-flag'
import { Animated } from 'react-native'

interface PositionContentProps {
  colorTeam?: string
}

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  padding: 10px 0 10px 20px;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const PositionContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-right: 12px;

  width: 30px;
  height: 100%;
`

export const PositionContentSplit = styled.View<PositionContentProps>`
  width: 4px;
  height: 100%;
  background-color: ${({ colorTeam }) => colorTeam};

  border-radius: 4px;
`

export const PositionNumber = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(12)}px;
`

export const TeamContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const TeamContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TeamContainerInfos = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TeamLogo = styled.View<PositionContentProps>`
  margin-right: 10px;

  background-color: ${({ colorTeam }) => colorTeam};
  border-radius: 8px;
  overflow: hidden;
`

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`

export const TeamContent = styled.View`
  flex: 1;
`

export const TeamName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(12)}px;
`
export const TeamFlag = styled(CountryFlag).attrs({
  size: 14,
})`
  margin-right: 6px;
  border-radius: 2px;
`

export const PointsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`

export const PointsContainerPercentage = styled.View``

export const PointsContainerPercentageLine = styled(Animated.View)`
  background: ${({ theme }) => theme.COLORS.GRAY_600};
  height: 4px;
  border-radius: 4px;
`

export const TeamContainerPointsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(10)}px;
  margin-left: 10px;
`

export const TeamContainerButton = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
`

export const TeamContainerButtonIcon = styled(CaretRight).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_100,
    size: 20,
    weight: 'bold',
  }),
)``
