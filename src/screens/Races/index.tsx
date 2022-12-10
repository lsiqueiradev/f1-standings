import { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import { apiF1 } from '@services/api'

import { RaceBox, RaceBoxProps } from '@components/RaceBox'
import { Loading } from '@components/Loading'

import * as S from './styles'

export function Races() {
  const [isLoading, setIsLoading] = useState(false)
  const [schedules, setSchedules] = useState<RaceBoxProps[]>([])

  const { navigate } = useNavigation<any>()

  async function fetchSchedule() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get('/current.json')
      const RacesResponse = data.MRData.RaceTable.Races.filter(
        (schedule: RaceBoxProps) => new Date(schedule.date) <= new Date(),
      )
      setSchedules(RacesResponse)
    } catch (err) {
      showMessage({
        type: 'danger',
        message: 'Unable to load races',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSchedule()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.List
      data={schedules}
      keyExtractor={(item) => item.round}
      renderItem={({ item, index }) => (
        <RaceBox
          data={item}
          onPress={() =>
            navigate('race-stack', {
              screen: 'race-details',
              params: {
                round: item.round,
                title: item.raceName,
                name: item.Circuit.circuitName,
                firstDate:
                  item.FirstPractice.date + 'T' + item.FirstPractice.time,
                lastDate: item.date + 'T' + item.time,
                country: item.Circuit.Location.country,
                isSprint: !!item.Sprint,
              },
            })
          }
        />
      )}
      ListHeaderComponent={() => <S.Separator />}
      ListFooterComponent={() => <S.Separator />}
      ListEmptyComponent={() => (
        <S.EmptyContainer>
          <S.EmptyText>Season not started</S.EmptyText>
        </S.EmptyContainer>
      )}
      ItemSeparatorComponent={() => <S.Separator />}
    />
  )
}
