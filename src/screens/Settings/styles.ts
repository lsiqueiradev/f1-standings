import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import Background from '@components/Background'

export const Container = styled(Background)`
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(30)}px;
`
