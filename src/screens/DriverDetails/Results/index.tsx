import { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import { apiF1 } from '@services/api'

import { ResultDriverBox, ResultDriverProps } from '@components/ResultDriverBox'
import { Loading } from '@components/Loading'

import * as S from './styles'

interface RouteParams {
  driverId: string
}

export function Results() {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<ResultDriverProps[]>([])

  const route = useRoute()
  const { driverId } = route.params as RouteParams

  async function fetchDriverResults() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get(
        `/current/drivers/${driverId}/results.json`,
      )

      setResults(data.MRData.RaceTable.Races)
    } catch (err) {
      showMessage({
        type: 'danger',
        message: 'Unable to load results driver',
      })
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchDriverResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.List
      data={results}
      keyExtractor={(item) => item.round}
      renderItem={({ item }) => <ResultDriverBox data={item} />}
      ListHeaderComponent={() => <S.Separator />}
      ListFooterComponent={() => <S.Separator />}
      ItemSeparatorComponent={() => <S.Separator />}
    />
  )
}
