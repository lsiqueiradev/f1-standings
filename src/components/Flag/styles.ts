import styled from 'styled-components/native'

interface FlagProps {
  size: number
}

export const Flag = styled.Image<FlagProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`
