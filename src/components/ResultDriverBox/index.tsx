import * as S from './styles'

export interface ResultDriverProps {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: {
    circuitId: string
    url: string
    circuitName: string
    Location: {
      lat: string
      long: string
      locality: string
      country: string
    }
  }
  date: string
  time: string
  Results: {
    number: string
    position: string
    positionText: string
    points: string
    Driver: {
      driverId: string
      permanentNumber: string
      code: string
      url: string
      givenName: string
      familyName: string
      dateOfBirth: string
      nationality: string
    }
    Constructor: {
      constructorId: string
      url: string
      name: string
      nationality: string
    }
    grid: string
    laps: string
    status: string
    Time: {
      millis: string
      time: string
    }
    FastestLap: {
      rank: string
      lap: string
      Time: {
        time: string
      }
      AverageSpeed: {
        units: string
        speed: string
      }
    }
  }[]
}

interface Props {
  data: ResultDriverProps
}

export function ResultDriverBox({ data }: Props) {
  return (
    <S.Container>
      <S.Content>
        <S.RoundContainer>
          <S.RoundContainerNumber>Round {data.round}</S.RoundContainerNumber>
          <S.RoundContainerCountry>
            {data.Circuit.Location.country}
          </S.RoundContainerCountry>
        </S.RoundContainer>
      </S.Content>
      <S.PositionTimeContainer>
        <S.PositionTimeContainerSpan>
          Position:
          <S.PositionTimeContainerSpanValue>
            {' ' + data.Results[0].position}
          </S.PositionTimeContainerSpanValue>
        </S.PositionTimeContainerSpan>
        <S.PositionTimeContainerTitle>
          {data.Results[0].points} pts
        </S.PositionTimeContainerTitle>
      </S.PositionTimeContainer>
    </S.Container>
  )
}
