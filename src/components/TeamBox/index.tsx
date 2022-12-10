import { teamsImages } from '@utils/getNamesImages'
import { getTeamColors } from '@utils/helpers'
import { useEffect, useRef, useState } from 'react'
import { Animated, PressableProps } from 'react-native'

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
  firstTeamPoints: string
  data: TeamBoxProps
}

export function TeamBox({ data, firstTeamPoints, ...rest }: Props) {
  const progress = useRef(new Animated.Value(0)).current
  const [widthPointsLine, setWidthPointsLine] = useState(0)
  const [pointsContainerWidth, setPointsContainerWidth] = useState(0)
  const [teamContainerPointsTitleWidth, setTeamContainerPointsTitleWidth] =
    useState(0)

  useEffect(() => {
    function handleCalculePorcentagePointDriver() {
      const partialPercentage =
        (100 * Number(data.points)) / Number(firstTeamPoints)

      const widthView =
        pointsContainerWidth - teamContainerPointsTitleWidth - 10

      const widthViewFinal = (partialPercentage / 100) * widthView

      setWidthPointsLine(widthViewFinal)
    }

    handleCalculePorcentagePointDriver()
  }, [
    data.points,
    firstTeamPoints,
    pointsContainerWidth,
    teamContainerPointsTitleWidth,
  ])

  useEffect(() => {
    function load() {
      Animated.timing(progress, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start()
    }

    load()
  }, [progress])

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, widthPointsLine],
    extrapolate: 'clamp',
  })

  return (
    <S.Container {...rest}>
      <S.HeaderContainer>
        <S.PositionContent>
          <S.PositionNumber>{data.position}</S.PositionNumber>
          <S.PositionContentSplit
            colorTeam={getTeamColors[data.Constructor.constructorId]}
          />
        </S.PositionContent>

        <S.TeamContainer>
          <S.TeamContainerInfos>
            <S.TeamLogo
              colorTeam={getTeamColors[data.Constructor.constructorId]}
            >
              <S.Logo
                source={teamsImages[data.Constructor.constructorId]}
                resizeMode="contain"
              />
            </S.TeamLogo>
            <S.TeamContent>
              <S.TeamContentHeader>
                {/* <S.DriverFlag
                  isoCode={getIsoCountry[data.Driver.nationality]}
                /> */}
                <S.TeamName>{data.Constructor.name}</S.TeamName>
              </S.TeamContentHeader>
              <S.PointsContainer
                onLayout={({ nativeEvent }) => {
                  setPointsContainerWidth(nativeEvent.layout.width)
                }}
              >
                <S.PointsContainerPercentage>
                  <S.PointsContainerPercentageLine style={{ width }} />
                </S.PointsContainerPercentage>
                <S.TeamContainerPointsTitle
                  onLayout={({ nativeEvent }) => {
                    setTeamContainerPointsTitleWidth(nativeEvent.layout.width)
                  }}
                >
                  {data.points}
                </S.TeamContainerPointsTitle>
              </S.PointsContainer>
            </S.TeamContent>
          </S.TeamContainerInfos>
          <S.TeamContainerButton>
            <S.TeamContainerButtonIcon />
          </S.TeamContainerButton>
        </S.TeamContainer>
      </S.HeaderContainer>
    </S.Container>
  )
}
