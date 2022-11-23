import { formattedDriversNameArray, getTeamColors } from '@utils/helpers'
import { PressableProps } from 'react-native'

import * as S from './styles'

export interface TeamBoxProps {
  position: string
  positionText: string
  points: string
  wins: string
  Constructor: {
    constructorId: string
    url: string
    name: string
    nationality: string
  }
  Drivers: {
    code: string
    dateOfBirth: string
    driverId: string
    familyName: string
    givenName: string
    nationality: string
    permanentNumber: string
    url: string
  }[]
}

interface Props extends PressableProps {
  data: TeamBoxProps
}

export function TeamBox({ data, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.HeaderContainer>
        <S.PositionContent
          colorTeam={getTeamColors[data.Constructor.constructorId]}
        >
          <S.PositionNumber>{data.position}</S.PositionNumber>
        </S.PositionContent>

        <S.DriverContainer>
          <S.DriverContainerInfos>
            <S.DriverContent>
              <S.DriverName>{data.Constructor.name}</S.DriverName>
              <S.DriverConstructor>
                {formattedDriversNameArray(data.Drivers)}
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
