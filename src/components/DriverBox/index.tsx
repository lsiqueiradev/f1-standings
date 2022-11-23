// import { useState } from 'react'
import { PressableProps } from 'react-native'

import { driversFrontImages } from '@utils/getNamesImages'

import * as S from './styles'
// import { useNavigation } from '@react-navigation/native'
import { getTeamColors } from '@utils/helpers'

export interface DriverBoxProps {
  position: string
  positionText: string
  points: string
  wins: string
  Driver: {
    driverId: string
    permanentNumber: string
    code: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
  }
  Constructors: {
    constructorId: string
    url: string
    name: string
    nationality: string
  }[]
}

interface Props extends PressableProps {
  data: DriverBoxProps
}

export function DriverBox({ data, ...rest }: Props) {
  // const { navigate } = useNavigation<any>()

  return (
    <S.Container {...rest}>
      <S.HeaderContainer>
        <S.PositionContent
          colorTeam={getTeamColors[data.Constructors[0].constructorId]}
        >
          <S.PositionNumber>{data.position}</S.PositionNumber>
        </S.PositionContent>

        <S.DriverContainer>
          <S.DriverContainerInfos>
            <S.DriverAvatar>
              <S.Avatar source={driversFrontImages[data.Driver.driverId]} />
            </S.DriverAvatar>
            <S.DriverContent>
              <S.DriverName>
                {data.Driver.givenName + ' ' + data.Driver.familyName}
              </S.DriverName>
              <S.DriverConstructor>
                {data.Constructors[0].name}
              </S.DriverConstructor>
            </S.DriverContent>
          </S.DriverContainerInfos>
          <S.DriverContainerPoints>
            <S.DriverContainerPointsTitle>
              {data.points}{' '}
            </S.DriverContainerPointsTitle>
            <S.DriverContainerPointsText>pts</S.DriverContainerPointsText>
          </S.DriverContainerPoints>
        </S.DriverContainer>
      </S.HeaderContainer>
    </S.Container>
  )
}
