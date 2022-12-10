import styled from 'styled-components/native'

import { CaretRight } from 'phosphor-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Flag } from '@components/Flag'

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  padding: 10px 0 10px 20px;
`

export const RaceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const RaceContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const RaceContentBody = styled.View`
  align-items: flex-start;
  margin-left: 10px;
`

export const RoundedContentFlag = styled.View`
  border-radius: 8px;
  overflow: hidden;
`

export const RoundedContentFlagImage = styled(Flag).attrs({
  size: 40,
})``

export const RaceNameContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`

export const RaceName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(13)}px;
`
export const RaceSprint = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 2px 5px;
  margin-left: 6px;
  border-radius: 4px;
`

export const RaceSprintText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(10)}px;
`

export const RaceContentBodyColumn = styled.View``

export const RaceCircuitName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(10)}px;

  margin: 2px 0 6px;
`

export const RaceDriversList = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 4px 5px;

  border-radius: 4px;
`

export const RaceDriver = styled.View`
  flex-direction: row;
  margin: 0 5px;
  align-items: center;
`

export const RaceDriversName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(10)}px;
`

export const RaceDriversRoundedFlag = styled.View`
  border-radius: 4px;
  overflow: hidden;
  margin: 0 4px 0 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
`

export const RaceDriversFlagImage = styled(Flag).attrs({
  size: 16,
})``

export const RaceContainerButton = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
`

export const RaceContainerButtonIcon = styled(CaretRight).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_100,
    size: 20,
    weight: 'bold',
  }),
)``
