/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useActionSheet } from '@expo/react-native-action-sheet';

import { showMessage } from 'react-native-flash-message'
import { apiF1 } from '@services/api'
import { Loading } from '@components/Loading'

import * as S from './styles'
import { DriverScheduleBox, DriverSchedulesBoxProps } from '@components/DriverScheduleBox'
import { getRaceTypeNames } from '@utils/helpers';

interface RouteParams {
  round: string
  isSprint: boolean
}

export function Results() {
  const [results, setResults] = useState<DriverSchedulesBoxProps>({} as DriverSchedulesBoxProps)
  const [raceType, setRaceType] = useState<'results' | 'qualifying' | 'sprint'>('results')
  const [isLoading, setIsLoading] = useState(true)

  const route = useRoute()
  const { round, isSprint } = route.params as RouteParams

  async function fetchResultsSchedule() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get(`/current/${round}/${raceType}.json`)

      if (raceType === 'qualifying') {
        setResults(data.MRData.RaceTable.Races[0].QualifyingResults)
      } else if (raceType === 'sprint') {
        setResults(data.MRData.RaceTable.Races[0].SprintResults)
      } else {
        setResults(data.MRData.RaceTable.Races[0].Results)
      }

    } catch (err) {
      showMessage({
        type: 'danger',
        message: 'Unable to load results race',
      })
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchResultsSchedule()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raceType])


  const { showActionSheetWithOptions } = useActionSheet();

  function handleOpenActionSheet() {
    const options = isSprint ? ['Race', 'Qualification', 'Sprint', 'Cancel'] : ['Race', 'Qualification', 'Cancel']
    const cancelButtonIndex = isSprint ? 3 : 2

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      title: 'Race types',
      cancelButtonTintColor: '#f00'
    }, (selectedIndex: number | undefined) => {
      switch (selectedIndex) {
        case 0:
          setRaceType('results')
          break;
        case 1:
          setRaceType('qualifying')
          break;
        case 2:
          isSprint && setRaceType('sprint')
          break;

        case cancelButtonIndex:
        // Canceled
      }
    });
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.List
      data={results}
      keyExtractor={(item) => item.number}
      renderItem={({ item }) => (
        <DriverScheduleBox
          type={raceType}
          data={item}
          round={round}
        />
      )}
      ListHeaderComponent={() => <><S.RaceTypeButton onPress={handleOpenActionSheet}>
        <S.RaceTypeButtonText>{getRaceTypeNames[raceType]}</S.RaceTypeButtonText>
        <S.RaceTypeButtonIcon />
      </S.RaceTypeButton></>}
      ListFooterComponent={() => <S.Separator />}
      ItemSeparatorComponent={() => <S.Separator />}
    />
  )
}
