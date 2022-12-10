import { useEffect, useState } from 'react'

import { apiF1 } from '@services/api'
import { showMessage } from 'react-native-flash-message'

import { Loading } from '@components/Loading'
import { ResultBox, ResultBoxProps } from '@components/ResultBox'

import * as S from './styles'

export function Results() {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<ResultBoxProps[]>([])

  useEffect(() => {
    async function fetchResults() {
      try {
        setIsLoading(true)
        const { data } = await apiF1.get(`/current.json`)

        const racesResponse = data.MRData.RaceTable.Races.filter(
          (race: ResultBoxProps) => new Date(race.date) <= new Date(),
        )

        const racesFormatted: ResultBoxProps[] = await Promise.all(
          racesResponse.map(
            async (race: ResultBoxProps): Promise<ResultBoxProps> => {
              const { data } = await apiF1.get(
                `/current/${race.round}/results.json?limit=3
              }`,
              )

              return {
                ...race,
                Results: data.MRData.RaceTable.Races[0].Results,
              }
            },
          ),
        )
        setResults(racesFormatted.reverse())
      } catch (err) {
        showMessage({
          type: 'danger',
          message: 'Unable to load schedule',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.List
      data={results}
      keyExtractor={(item) => item.raceName}
      renderItem={({ item }) => <ResultBox data={item} />}
      ListHeaderComponent={() => <S.Separator />}
      ListFooterComponent={() => <S.Separator />}
      ItemSeparatorComponent={() => <S.Separator />}
    />
  )
}
