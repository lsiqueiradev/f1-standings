import styled from 'styled-components/native'

import Background from '@components/Background'

export const Container = styled(Background)`
  justify-content: center;
  align-items: center;
`

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
}))``
