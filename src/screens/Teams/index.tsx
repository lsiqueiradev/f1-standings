import { useEffect, useState } from 'react'

import { showMessage } from 'react-native-flash-message'
import { apiF1 } from '@services/api'

import { TeamBox, TeamBoxProps } from '@components/TeamBox'
import { Loading } from '@components/Loading'

import * as S from './styles'

export function Teams() {
  const [isLoading, setIsLoading] = useState(true)
  const [firstTeamPoints, setFirstTeamPoints] = useState('')
  const [teams, setTeams] = useState<TeamBoxProps[]>([])

  async function fetchDriverStandings() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get('/current/constructorStandings.json')

      const teamsResponse =
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings

      setFirstTeamPoints(
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]
          .points,
      )

      const teamsFormatted: TeamBoxProps[] = await Promise.all(
        teamsResponse.map(
          async (team: TeamBoxProps, index: number): Promise<TeamBoxProps> => {
            const { data } = await apiF1.get(
              `/current/constructors/${team.Constructor.constructorId}/drivers.json`,
            )

            return {
              ...team,
              Drivers: data.MRData.DriverTable.Drivers,
            }
          },
        ),
      )
      setTeams(teamsFormatted)
    } catch (err) {
      console.log(err)
      showMessage({
        type: 'danger',
        message: 'Unable to load schedule',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDriverStandings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.List
      data={teams}
      keyExtractor={(item) => item.Constructor.constructorId}
      renderItem={({ item }) => (
        <TeamBox data={item} firstTeamPoints={firstTeamPoints} />
      )}
      ListHeaderComponent={() => <S.Separator />}
      ListFooterComponent={() => <S.Separator />}
      ItemSeparatorComponent={() => <S.Separator />}
    />
  )
}
