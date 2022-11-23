import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, FlatListProps } from 'react-native'

import { CaretDown } from 'phosphor-react-native'
import { DriverSchedulesBoxProps } from '@components/DriverScheduleBox'

export const List = styled(
  FlatList as new (
    props: FlatListProps<DriverSchedulesBoxProps>,
  ) => FlatList<DriverSchedulesBoxProps>,
).attrs({
  contentContainerStyle: { flexGrow: 1 },
  paddingRight: 15,
  showsVerticalScrollIndicator: false,
})``

export const Separator = styled.View`
  width: 100%;
  height: 20px;
`

export const RaceTypeButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 20px;
`

export const RaceTypeButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(14)}px;
`

export const RaceTypeButtonIcon = styled(CaretDown).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
  size: RFValue(18),
}))`
  margin-left: 5px;
`
