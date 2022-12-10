/* eslint-disable prettier/prettier */
import { useState, useCallback } from 'react'
import { useRoute, useFocusEffect } from '@react-navigation/native'

import * as S from './styles'
import { ScheduleBoxProps } from '@components/ScheduleBox'
import { showMessage } from 'react-native-flash-message'
import { apiF1, apiInfomation } from '@services/api'
import { Loading } from '@components/Loading'
// import { circuitsImages } from '@utils/getNamesImages'
import { getCircuitInformationsNames } from '@utils/helpers'
import { circuitsImages } from '@utils/getNamesImages'

interface RouteParams {
  round: string
}

export function Informations() {
  const [race, setRace] = useState<ScheduleBoxProps>({} as ScheduleBoxProps)
  const [isLoading, setIsLoading] = useState(true)

  const route = useRoute()
  const { round } = route.params as RouteParams

  async function fetchSchedule() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get(`/current/${round}.json`)

      const circuit = data.MRData.RaceTable.Races[0]

      const { data: informations } = await apiInfomation.get(
        `/circuit/info?country=${getCircuitInformationsNames[circuit.Circuit.circuitId]}`,
      )

      const LapRecord = informations.LapRecord.split(' ', 1)[0]
      const DriverLapRecord = informations.LapRecord.replace(`${informations.LapRecord.split(' ', 1)} `, '')

      setRace({ ...circuit, Informations: { ...informations, LapRecord, DriverLapRecord } })
    } catch (err) {
      console.log(err)
      showMessage({
        type: 'danger',
        message: 'Unable to load race details',
      })
    } finally {
      setIsLoading(false)
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchSchedule()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <S.CircuitContainer>
        <S.CircuitTitle>Map</S.CircuitTitle>
        <S.CircuitMap>
          <S.Circuit
            source={circuitsImages[race.Circuit.circuitId]}
            resizeMode="contain"
          />
        </S.CircuitMap>
      </S.CircuitContainer>
      <S.WeekendContainer>
        <S.WeekendItem>
          <S.WeekendItemTitle>First Practice</S.WeekendItemTitle>
          <S.WeekendItemContent>
            <S.WeekendItemDate>{race.FirstPractice.date}</S.WeekendItemDate>
            <S.WeekendItemHour>{race.FirstPractice.time}</S.WeekendItemHour>
          </S.WeekendItemContent>
        </S.WeekendItem>
        <S.WeekendItem>
          <S.WeekendItemTitle>{race.Sprint ? 'Qualifying' : 'Second Practice'}</S.WeekendItemTitle>
          <S.WeekendItemContent>
            <S.WeekendItemDate>{race.Sprint ? race.Qualifying.date : race.SecondPractice.date}</S.WeekendItemDate>
            <S.WeekendItemHour>{race.Sprint ? race.Qualifying.time : race.SecondPractice.time}</S.WeekendItemHour>
          </S.WeekendItemContent>
        </S.WeekendItem>
        <S.WeekendItem>
          <S.WeekendItemTitle>{race.Sprint ? 'Second Practice' : 'Third Practice'}</S.WeekendItemTitle>
          <S.WeekendItemContent>
            <S.WeekendItemDate>{race.Sprint ? race.SecondPractice?.date : race.ThirdPractice?.date}</S.WeekendItemDate>
            <S.WeekendItemHour>{race.Sprint ? race.SecondPractice?.time : race.ThirdPractice?.time}</S.WeekendItemHour>
          </S.WeekendItemContent>
        </S.WeekendItem>
        <S.WeekendItem>
          <S.WeekendItemTitle>{race.Sprint ? 'Sprint' : 'Qualifying'}</S.WeekendItemTitle>
          <S.WeekendItemContent>
            <S.WeekendItemDate>{race.Sprint ? race.Sprint.date : race.Qualifying.date}</S.WeekendItemDate>
            <S.WeekendItemHour>{race.Sprint ? race.Sprint.time : race.Qualifying.time}</S.WeekendItemHour>
          </S.WeekendItemContent>
        </S.WeekendItem>
        <S.WeekendItem>
          <S.WeekendItemTitle>Race</S.WeekendItemTitle>
          <S.WeekendItemContent>
            <S.WeekendItemDate>{race.date}</S.WeekendItemDate>
            <S.WeekendItemHour>{race.time}</S.WeekendItemHour>
          </S.WeekendItemContent>
        </S.WeekendItem>
      </S.WeekendContainer>
      <S.InformationsContainer>
        <S.InformationsTitle>Circuit Informations</S.InformationsTitle>
        <S.InformationsItem>
          <S.InformationsItemSpan>Circuit length</S.InformationsItemSpan>
          <S.InformationsItemTitle>{race.Informations?.CircuitLength}</S.InformationsItemTitle>
        </S.InformationsItem>
        <S.InformationsRow>
          <S.InformationsItem>
            <S.InformationsItemSpan>No. of laps</S.InformationsItemSpan>
            <S.InformationsItemTitle>{race.Informations?.NumberOfLaps}</S.InformationsItemTitle>
          </S.InformationsItem>
          <S.InformationsItem>
            <S.InformationsItemSpan>First Grand Prix</S.InformationsItemSpan>
            <S.InformationsItemTitle>{race.Informations?.FirstGrandPrix}</S.InformationsItemTitle>
          </S.InformationsItem>
        </S.InformationsRow>
        <S.InformationsItem>
          <S.InformationsItemSpan>Race distante</S.InformationsItemSpan>
          <S.InformationsItemTitle>{race.Informations?.RaceDistance}</S.InformationsItemTitle>
        </S.InformationsItem>
        <S.InformationsItem>
          <S.InformationsItemSpan>Lap record</S.InformationsItemSpan>
          <S.InformationsItemTitle>{race.Informations?.LapRecord}</S.InformationsItemTitle>
          <S.InformationsItemSmall>{race.Informations?.DriverLapRecord}</S.InformationsItemSmall>
        </S.InformationsItem>
      </S.InformationsContainer>
    </S.Container>
  )
}
