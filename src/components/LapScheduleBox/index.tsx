import * as S from './styles'

export interface LapScheduleBoxProps {
  number: string
  Timings: {
    driverId: string
    position: string
    time: string
  }[]
}

interface Props {
  data: LapScheduleBoxProps
}

export function LapScheduleBox({ data }: Props) {
  return (
    <S.Container>
      <S.LapContainer>
        <S.LapContainerSpan>Lap </S.LapContainerSpan>
        <S.LapContainerTitle>{data.number}</S.LapContainerTitle>
      </S.LapContainer>
      <S.PositionTimeContainer>
        <S.PositionTimeContainerSpan>
          Position:
          <S.PositionTimeContainerSpanValue>
            {' ' + data.Timings[0].position}
          </S.PositionTimeContainerSpanValue>
        </S.PositionTimeContainerSpan>
        <S.PositionTimeContainerTitle>
          {data.Timings[0].time}
        </S.PositionTimeContainerTitle>
      </S.PositionTimeContainer>
    </S.Container>
  )
}
