import styled from 'styled-components/native'

import { CaretRight } from 'phosphor-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Animated } from 'react-native'
import { Flag } from '@components/Flag'

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

export const DriverContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const DriverContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`

export const DriverContainerInfos = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DriverAvatar = styled.View`
  margin-right: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  overflow: hidden;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`

export const DriverContent = styled.View`
  flex: 1;
`

export const DriverName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(12)}px;
`

export const DriverRoundedFlag = styled.View`
  border-radius: 4px;
  overflow: hidden;
  margin-right: 6px;
`

export const DriverRoundedFlagImage = styled(Flag).attrs({
  size: 20,
})``

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

export const DriverContainerPointsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(10)}px;
  margin-left: 10px;
`

export const DriverContainerButton = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
`

export const DriverContainerButtonIcon = styled(CaretRight).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_100,
    size: 20,
    weight: 'bold',
  }),
)``
