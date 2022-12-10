import flagIndex from '@assets/flags/flagsIndex'

import * as S from './styles'

interface FlagProps {
  size: number
  isoCode: string
}

export function Flag({ size = 50, isoCode }: FlagProps) {
  return <S.Flag source={flagIndex[isoCode.toLowerCase()]} size={size} />
}
