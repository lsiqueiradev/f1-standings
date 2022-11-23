import { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'

import * as S from './styles'
import { apiF1 } from '@services/api'
import { showMessage } from 'react-native-flash-message'
import { Loading } from '@components/Loading'
import { LapScheduleBox, LapScheduleBoxProps } from '@components/LapScheduleBox'
import { driversImages } from '@utils/getNamesImages'
import { format } from 'date-fns'

interface RouteParams {
  round: string
  driverId: string
}

interface RoundInfoProps {
  name: string
  firstDate: string
  lastDate: string
}

export function Laps() {
  const [laps, setLaps] = useState<LapScheduleBoxProps[]>([])
  const [roundInformation, setRoundInformation] = useState<RoundInfoProps>(
    {} as RoundInfoProps,
  )
  const [isLoading, setIsLoading] = useState(true)

  const route = useRoute()
  const { round, driverId } = route.params as RouteParams

  async function fetchResultsLapsDriver() {
    try {
      setIsLoading(true)

      const { data: responseRound } = await apiF1.get(`/current/${round}.json`)

      const { data: responseLaps } = await apiF1.get(
        `/current/${round}/drivers/${driverId}/laps.json?limit=100`,
      )
      setRoundInformation({
        name: responseRound.MRData.RaceTable.Races[0].Circuit.circuitName,
        firstDate:
          responseRound.MRData.RaceTable.Races[0].FirstPractice.date +
          'T' +
          responseRound.MRData.RaceTable.Races[0].FirstPractice.time,
        lastDate:
          responseRound.MRData.RaceTable.Races[0].date +
          'T' +
          responseRound.MRData.RaceTable.Races[0].time,
      })

      setLaps(responseLaps.MRData.RaceTable.Races[0].Laps)
    } catch (err) {
      showMessage({
        type: 'danger',
        message: 'Unable to load laps',
      })
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchResultsLapsDriver()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.HeaderContentRaceRound>Round {round}</S.HeaderContentRaceRound>
          <S.HeaderContentRaceName>
            {roundInformation.name}
          </S.HeaderContentRaceName>
          <S.HeaderContentRaceDate>
            {format(new Date(roundInformation.firstDate), 'dd LLL')} -{' '}
            {format(new Date(roundInformation.lastDate), 'dd LLL uuu')}
          </S.HeaderContentRaceDate>
        </S.HeaderContent>
        <S.Country source={driversImages[driverId]} resizeMode="contain" />
      </S.HeaderContainer>
      <S.List
        data={laps}
        keyExtractor={(item) => item.number}
        renderItem={({ item }) => <LapScheduleBox data={item} />}
        ListHeaderComponent={() => <S.Separator />}
        ListFooterComponent={() => <S.Separator />}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.Container>
  )
}
