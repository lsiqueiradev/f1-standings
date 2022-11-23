import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface PositionContentProps {
  colorTeam?: string
}

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  padding: 10px 10px 10px 0;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const PositionContent = styled.View<PositionContentProps>`
  align-items: center;
  justify-content: center;
  border-right-width: 2px;
  border-right-color: ${({ theme, colorTeam }) =>
    colorTeam || theme.COLORS.GRAY_600};

  margin-right: 12px;

  width: 60px;
`

export const PositionNumber = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(18)}px;
`

export const DriverContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DriverContainerInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DriverAvatar = styled.View`
  margin-right: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 30px;
  overflow: hidden;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
`

export const DriverContent = styled.View``

export const DriverName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(14)}px;
`

export const DriverConstructor = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${RFValue(12)}px;
`

export const DriverContainerPoints = styled.View`
  flex-direction: row;
  align-items: center;
`

export const DriverContainerPointsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(12)}px;
`

export const DriverContainerPointsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(12)}px;
`
