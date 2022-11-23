import { useEffect, useState } from 'react'

import { ScheduleBox, ScheduleBoxProps } from '@components/ScheduleBox'

import { Loading } from '@components/Loading'
import { apiF1 } from '@services/api'
import { showMessage } from 'react-native-flash-message'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

export function Upcoming() {
  const [isLoading, setIsLoading] = useState(false)
  const [schedules, setSchedules] = useState<ScheduleBoxProps[]>([])

  const { navigate } = useNavigation()

  async function fetchSchedule() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get('/current.json')

      const UpcomingSchedule = data.MRData.RaceTable.Races.filter(
        (schedule: ScheduleBoxProps) => new Date(schedule.date) > new Date(),
      )
      setSchedules(UpcomingSchedule)
    } catch (err) {
      showMessage({
        type: 'danger',
        message: 'Unable to load schedule',
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
    <S.Container>
      <S.List
        data={schedules}
        keyExtractor={(item) => item.round}
        renderItem={({ item, index }) => (
          <ScheduleBox
            data={item}
            onPress={() =>
              navigate('schedule-stack', {
                screen: 'schedule-details',
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
            <S.EmptyText>Season finished</S.EmptyText>
          </S.EmptyContainer>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.Container>
  )
}
