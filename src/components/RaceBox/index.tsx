import { getIsoCountryCircuits } from '@utils/helpers'
import { format } from 'date-fns'
import { PressableProps } from 'react-native'

import * as S from './styles'

export interface RaceBoxProps {
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
  Informations?: {
    CircuitLength: string
    FirstGrandPrix: string
    LapRecord: string
    NumberOfLaps: string
    RaceDistance: string
    DriverLapRecord: string
  }
}

interface Props extends PressableProps {
  data: RaceBoxProps
}

export function RaceBox({ data, ...rest }: Props) {
  const monthWeekendRacingFirst = format(
    new Date(data.FirstPractice.date),
    'LLL',
  )
  const monthWeekendRacingLast = format(new Date(data.date), 'LLL')
  const dateWeekendFirst = format(
    new Date(data.FirstPractice.date + 'T' + data.FirstPractice.time),
    'dd',
  )
  const dateWeekendLast = format(new Date(data.date + 'T' + data.time), 'dd')

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
            <S.RaceDateContent>
              <S.RaceDateText>
                {dateWeekendFirst + ' '}
                {monthWeekendRacingFirst !== monthWeekendRacingLast &&
                  monthWeekendRacingFirst.toUpperCase() + ' '}
                - {dateWeekendLast + ' ' + monthWeekendRacingLast.toUpperCase()}
              </S.RaceDateText>
            </S.RaceDateContent>
          </S.RaceContentBody>
        </S.RaceContent>
        <S.RaceContainerButton>
          <S.RaceContainerButtonIcon />
        </S.RaceContainerButton>
      </S.RaceContainer>
    </S.Container>
  )
}
