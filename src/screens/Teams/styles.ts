import { TeamBoxProps } from '@components/TeamBox'
import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'

export const List = styled(
  FlatList as new (
    props: FlatListProps<TeamBoxProps>,
  ) => FlatList<TeamBoxProps>,
).attrs({
  contentContainerStyle: { flexGrow: 1 },
  paddingRight: 15,
  showsVerticalScrollIndicator: false,
})``

export const Separator = styled.View`
  width: 100%;
  height: 15px;
`
