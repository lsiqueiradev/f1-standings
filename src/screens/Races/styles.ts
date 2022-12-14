import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, FlatListProps } from 'react-native'

import { ScheduleBoxProps } from '@components/ScheduleBox'

export const List = styled(
  FlatList as new (
    props: FlatListProps<ScheduleBoxProps>,
  ) => FlatList<ScheduleBoxProps>,
).attrs({
  contentContainerStyle: { flexGrow: 1 },
  paddingRight: 15,
  showsVerticalScrollIndicator: false,
})``

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(30)}px;
`

export const Separator = styled.View`
  width: 100%;
  height: 20px;
`
export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const EmptyText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(30)}px;
`
