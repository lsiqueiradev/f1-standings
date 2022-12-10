import { getIsoCountry, getIsoCountryCircuits } from '@utils/helpers'
import { PressableProps } from 'react-native'

import * as S from './styles'

export interface ResultBoxProps {
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
  FirstPractice: {
    date: string
    time: string
  }
  SecondPractice: {
    date: string
    time: string
  }
  ThirdPractice?: {
    date: string
    time: string
  }
  Qualifying: {
    date: string
    time: string
  }
  Sprint?: {
    date: string
    time: string
  }
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

interface Props extends PressableProps {
  data: ResultBoxProps
}

export function ResultBox({ data, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.RaceContainer>
        <S.RaceContent>
          <S.RoundedContentFlag>
            <S.RoundedContentFlagImage
              isoCode={getIsoCountryCircuits[data.Circuit.Location.country]}
            />
          </S.RoundedContentFlag>
          <S.RaceContentBody>
            <S.RaceContentBodyColumn>
              <S.RaceNameContainer>
                <S.RaceName>{data.raceName}</S.RaceName>
                {data.Sprint && (
                  <S.RaceSprint>
                    <S.RaceSprintText>Sprint</S.RaceSprintText>
                  </S.RaceSprint>
                )}
              </S.RaceNameContainer>
              <S.RaceCircuitName>
                {data.round + ' - ' + data.Circuit.circuitName}
              </S.RaceCircuitName>
            </S.RaceContentBodyColumn>
            <S.RaceDriversList>
              {data.Results.map((driver) => (
                <S.RaceDriver key={driver.position}>
                  <S.RaceDriversName>{driver.position}</S.RaceDriversName>

                  <S.RaceDriversRoundedFlag>
                    <S.RaceDriversFlagImage
                      isoCode={getIsoCountry[driver.Driver.nationality]}
                    />
                  </S.RaceDriversRoundedFlag>
                  <S.RaceDriversName>{driver.Driver.code}</S.RaceDriversName>
                </S.RaceDriver>
              ))}
            </S.RaceDriversList>
          </S.RaceContentBody>
        </S.RaceContent>
        <S.RaceContainerButton>
          <S.RaceContainerButtonIcon />
        </S.RaceContainerButton>
      </S.RaceContainer>
    </S.Container>
  )
}
