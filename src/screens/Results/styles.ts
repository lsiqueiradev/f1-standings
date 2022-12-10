import { ResultBoxProps } from '@components/ResultBox'
import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'

export const List = styled(
  FlatList as new (
    props: FlatListProps<ResultBoxProps>,
  ) => FlatList<ResultBoxProps>,
).attrs({
  contentContainerStyle: { flexGrow: 1 },
  paddingRight: 15,
  showsVerticalScrollIndicator: false,
})``

export const Separator = styled.View`
  width: 100%;
  height: 15px;
`
