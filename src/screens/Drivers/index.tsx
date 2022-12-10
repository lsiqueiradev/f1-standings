import { useEffect, useState } from 'react'

import { apiF1 } from '@services/api'
import { showMessage } from 'react-native-flash-message'

import { Loading } from '@components/Loading'

import * as S from './styles'
import { DriverBox, DriverBoxProps } from '@components/DriverBox'
import { useNavigation } from '@react-navigation/native'

export function Drivers() {
  const [isLoading, setIsLoading] = useState(true)
  const [firstDriverPoints, setFirstDriverPoints] = useState('')
  const [drivers, setDrivers] = useState<DriverBoxProps[]>([])

  const { navigate } = useNavigation<any>()

  async function fetchDriverStandings() {
    try {
      setIsLoading(true)
      const { data } = await apiF1.get('/current/driverStandings.json')
      setFirstDriverPoints(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points,
      )
      setDrivers(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings.filter(
          (driver: DriverBoxProps) =>
            driver.position !== '21' && driver.position !== '22',
        ),
      )
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
    fetchDriverStandings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.List
      data={drivers}
      keyExtractor={(item) => item.Driver.driverId}
      renderItem={({ item }) => (
        <DriverBox
          data={item}
          firstDriverPoints={firstDriverPoints}
          onPress={() =>
            navigate('driver-stack', {
              screen: 'driver-details',
              params: {
                nationality: item.Driver.nationality,
                givenName: item.Driver.givenName,
                familyName: item.Driver.familyName,
                driverId: item.Driver.driverId,
                driverPermanentNumber: item.Driver.permanentNumber,
                constructorId: item.Constructors[0].constructorId,
                constructorName: item.Constructors[0].name,
              },
            })
          }
        />
      )}
      ListHeaderComponent={() => <S.Separator />}
      ListFooterComponent={() => <S.Separator />}
      ItemSeparatorComponent={() => <S.Separator />}
    />
  )
}
