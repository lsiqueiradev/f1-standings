import { useState } from 'react'
import { PressableProps } from 'react-native'

import { driversFrontImages } from '@utils/getNamesImages'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { getTeamColors } from '@utils/helpers'

export interface DriverSchedulesBoxProps {
  number: string
  position: string
  positionText?: string
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
    AverageSpeed?: {
      units: string
      speed: string
    }
  }
  Q1: string
  Q2: string
  Q3: string
}

interface Props extends PressableProps {
  type: 'results' | 'qualifying' | 'sprint'
  round: string
  data: DriverSchedulesBoxProps
}

export function DriverScheduleBox({
  data,
  round,
  type = 'results',
  ...rest
}: Props) {
  const { navigate } = useNavigation<any>()
  const [moreInfo, setMoreInfo] = useState(false)

  function handleShowMoreInfos() {
    setMoreInfo(!moreInfo)
  }

  function setTimeDriver(status: string | undefined) {
    if (status === 'Finished') {
      return data.Time?.time
    }

    if (status && status.split(' ')[1] === 'Lap') {
      return status
    }

    return 'DNF'
  }

  return (
    <S.Container {...rest} onPress={handleShowMoreInfos}>
      <S.HeaderContainer>
        <S.PositionContent
          colorTeam={getTeamColors[data.Constructor.constructorId]}
        >
          <S.PositionNumber>{data.position}</S.PositionNumber>
        </S.PositionContent>

        <S.DriverContainer>
          <S.DriverContainerInfos>
            <S.DriverAvatar>
              <S.Avatar source={driversFrontImages[data.Driver.driverId]} />
            </S.DriverAvatar>
            <S.DriverContent>
              <S.DriverName>
                {data.Driver.givenName + ' ' + data.Driver.familyName}
              </S.DriverName>
              <S.DriverConstructor>{data.Constructor.name}</S.DriverConstructor>
            </S.DriverContent>
          </S.DriverContainerInfos>
          {type !== 'qualifying' && (
            <S.DriverContentTime>
              {setTimeDriver(data.status)}
            </S.DriverContentTime>
          )}
        </S.DriverContainer>
      </S.HeaderContainer>

      {moreInfo && type !== 'qualifying' && (
        <S.BodyContainer>
          <S.FastestLapContainer>
            <S.FastestLapContainerTitle>Fastest lap</S.FastestLapContainerTitle>
            <S.FastestContent>
              {type === 'results' && (
                <S.FastestContentItem>
                  <S.FastestContentItemSpan>Rank</S.FastestContentItemSpan>
                  <S.FastestContentItemTitle>
                    {data.FastestLap?.rank ? data.FastestLap?.rank : 'N/A'}
                  </S.FastestContentItemTitle>
                </S.FastestContentItem>
              )}
              <S.FastestContentItem>
                <S.FastestContentItemSpan>Lap</S.FastestContentItemSpan>
                <S.FastestContentItemTitle>
                  {data.FastestLap?.lap ? data.FastestLap?.lap : 'N/A'}
                </S.FastestContentItemTitle>
              </S.FastestContentItem>
              <S.FastestContentItem>
                <S.FastestContentItemSpan>Time</S.FastestContentItemSpan>
                <S.FastestContentItemTitle>
                  {data.FastestLap?.Time?.time
                    ? data.FastestLap?.Time?.time
                    : 'N/A'}
                </S.FastestContentItemTitle>
              </S.FastestContentItem>
              {type === 'results' && (
                <S.FastestContentItem>
                  <S.FastestContentItemSpan>
                    Average speed
                  </S.FastestContentItemSpan>
                  <S.FastestContentItemTitle>
                    {data.FastestLap?.AverageSpeed?.speed
                      ? data.FastestLap?.AverageSpeed?.speed
                      : 'N/A'}{' '}
                    {data.FastestLap?.AverageSpeed?.units}
                  </S.FastestContentItemTitle>
                </S.FastestContentItem>
              )}
            </S.FastestContent>
            {type === 'results' && data.FastestLap?.lap && (
              <S.FastestContentLap
                onPress={() =>
                  navigate('schedule-stack', {
                    screen: 'schedule-laps',
                    params: {
                      round,
                      driverId: data.Driver.driverId,
                    },
                  })
                }
              >
                <S.FastestContentLapText>
                  View lap by lap
                </S.FastestContentLapText>
              </S.FastestContentLap>
            )}
          </S.FastestLapContainer>
        </S.BodyContainer>
      )}
      {type === 'qualifying' && (data.Q1 || data.Q2 || data.Q3) && (
        <S.QualifyingContent>
          <S.QualifyingItem>
            <S.QualifyingItemSpan>Q1: </S.QualifyingItemSpan>
            <S.QualifyingItemTitle>{data.Q1}</S.QualifyingItemTitle>
          </S.QualifyingItem>
          {data.Q2 && (
            <S.QualifyingItem>
              <S.QualifyingItemSpan>Q2: </S.QualifyingItemSpan>
              <S.QualifyingItemTitle>{data.Q2}</S.QualifyingItemTitle>
            </S.QualifyingItem>
          )}
          {data.Q3 && (
            <S.QualifyingItem>
              <S.QualifyingItemSpan>Q3: </S.QualifyingItemSpan>
              <S.QualifyingItemTitle>{data.Q3}</S.QualifyingItemTitle>
            </S.QualifyingItem>
          )}
        </S.QualifyingContent>
      )}
    </S.Container>
  )
}
