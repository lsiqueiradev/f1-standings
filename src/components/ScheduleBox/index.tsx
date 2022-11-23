import { PressableProps } from 'react-native'

import { format } from 'date-fns'

import { countriesImages } from '@utils/getNamesImages'

import * as S from './styles'

export interface ScheduleBoxProps {
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
  lastItem?: boolean
  data: ScheduleBoxProps
}

export function ScheduleBox({ data, lastItem = false, ...rest }: Props) {
  const monthWeekendRacingFirst = format(
    new Date(data.FirstPractice.date),
    'LLL',
  )
  const monthWeekendRacingLast = format(new Date(data.date), 'LLL')

  const imageString = data.Circuit.Location.country
    .replace(' ', '')
    .toLocaleLowerCase()
  const imageCountry = countriesImages[imageString]

  return (
    <S.Container {...rest}>
      <S.DateContent>
        <S.DateContentDay>
          {format(new Date(data.date), 'dd')}-
          {format(new Date(data.FirstPractice.date), 'dd')}
        </S.DateContentDay>
        <S.DateContentMonth>
          <S.DateContentMonthText
            size={monthWeekendRacingFirst === monthWeekendRacingLast ? 10 : 7}
          >
            {monthWeekendRacingFirst === monthWeekendRacingLast
              ? monthWeekendRacingFirst
              : `${monthWeekendRacingFirst}-${monthWeekendRacingLast}`}
          </S.DateContentMonthText>
        </S.DateContentMonth>
      </S.DateContent>

      <S.RoundContent>
        <S.RoundContentImage source={imageCountry} resizeMode="contain" />
        <S.RoundContentInfos>
          <S.RoundContentInfosRound>
            Round {data.round}
          </S.RoundContentInfosRound>
          <S.RoundContentInfosTitle>
            {data.Circuit.Location.country}
          </S.RoundContentInfosTitle>
          <S.RoundContentInfosSubtitle>
            {data.raceName}
          </S.RoundContentInfosSubtitle>
        </S.RoundContentInfos>
      </S.RoundContent>
    </S.Container>
  )
}
