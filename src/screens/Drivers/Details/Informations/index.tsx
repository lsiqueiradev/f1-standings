import { Loading } from '@components/Loading'
import { useRoute } from '@react-navigation/native'
import { apiInfomation } from '@services/api'
import { useEffect, useState } from 'react'

import * as S from './styles'

interface RouteParams {
  driverId: string
  givenName: string
  familyName: string
}

interface DriverInformationsProps {
  Team: string
  Country: string
  Podiums: string
  Points: string
  GrandsPrixEntered: string
  WorldChampionships: string
  HighestRaceFinish: string
  HighestGridPosition: string
  DateOfBirth: string
  PlaceOfBirth: string
}

export function Informations() {
  const [isLoading, setIsLoading] = useState(true)
  const [driverInformation, setDriverInformation] =
    useState<DriverInformationsProps | null>({} as DriverInformationsProps)

  const route = useRoute()
  const { familyName, givenName } = route.params as RouteParams

  async function fetchDriverInformations() {
    try {
      setIsLoading(true)
      const { data } = await apiInfomation.get(
        `/driver/info?driver=${(givenName + '-' + familyName).toLowerCase()}`,
      )
      setDriverInformation(data)
    } catch (err) {
      setDriverInformation(null)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchDriverInformations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <S.InformationsContainer>
        <S.InformationsTitle>Basic Informations</S.InformationsTitle>
        <S.InformationsItem>
          <S.InformationsItemSpan>Date of Birth</S.InformationsItemSpan>
          <S.InformationsItemTitle>
            {driverInformation.DateOfBirth}
          </S.InformationsItemTitle>
        </S.InformationsItem>
        <S.InformationsItem>
          <S.InformationsItemSpan>Place of Birth</S.InformationsItemSpan>
          <S.InformationsItemTitle>
            {driverInformation.PlaceOfBirth}
          </S.InformationsItemTitle>
        </S.InformationsItem>
        <S.InformationsItem>
          <S.InformationsItemSpan>World Championships</S.InformationsItemSpan>
          <S.InformationsItemTitle>
            {driverInformation.WorldChampionships}
          </S.InformationsItemTitle>
        </S.InformationsItem>
        <S.InformationsRow>
          <S.InformationsItem>
            <S.InformationsItemSpan>Grand Prix</S.InformationsItemSpan>
            <S.InformationsItemTitle>
              {driverInformation.GrandsPrixEntered}
            </S.InformationsItemTitle>
          </S.InformationsItem>
          <S.InformationsItem>
            <S.InformationsItemSpan>Podiums</S.InformationsItemSpan>
            <S.InformationsItemTitle>
              {driverInformation.Podiums}
            </S.InformationsItemTitle>
          </S.InformationsItem>
          <S.InformationsItem>
            <S.InformationsItemSpan>Points</S.InformationsItemSpan>
            <S.InformationsItemTitle>
              {driverInformation.Points}
            </S.InformationsItemTitle>
          </S.InformationsItem>
        </S.InformationsRow>
        <S.InformationsRow>
          <S.InformationsItem>
            <S.InformationsItemSpan>Highest race finish</S.InformationsItemSpan>
            <S.InformationsItemTitle>
              {driverInformation.HighestRaceFinish}
            </S.InformationsItemTitle>
          </S.InformationsItem>
          <S.InformationsItem>
            <S.InformationsItemSpan>
              Highest grid position
            </S.InformationsItemSpan>
            <S.InformationsItemTitle>
              {driverInformation.HighestGridPosition}
            </S.InformationsItemTitle>
          </S.InformationsItem>
        </S.InformationsRow>
        <S.InformationsItem>
          <S.InformationsItemSpan>Team</S.InformationsItemSpan>
          <S.InformationsItemTitle>
            {driverInformation.Team}
          </S.InformationsItemTitle>
        </S.InformationsItem>
      </S.InformationsContainer>
    </S.Container>
  )
}
