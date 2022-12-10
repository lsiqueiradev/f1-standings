// import { useState } from 'react'
import { Animated, PressableProps } from 'react-native'

import { driversFrontImages } from '@utils/getNamesImages'

import * as S from './styles'
// import { useNavigation } from '@react-navigation/native'
import { getIsoCountry, getTeamColors } from '@utils/helpers'
import { useEffect, useRef, useState } from 'react'

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
  firstDriverPoints: string
  data: DriverBoxProps
}

export function DriverBox({ data, firstDriverPoints, ...rest }: Props) {
  // const { navigate } = useNavigation<any>()
  const progress = useRef(new Animated.Value(0)).current
  const [widthPointsLine, setWidthPointsLine] = useState(0)
  const [pointsContainerWidth, setPointsContainerWidth] = useState(0)
  const [driverContainerPointsTitleWidth, setDriverContainerPointsTitleWidth] =
    useState(0)

  useEffect(() => {
    function handleCalculePorcentagePointDriver() {
      const partialPercentage =
        (100 * Number(data.points)) / Number(firstDriverPoints)

      const widthView =
        pointsContainerWidth - driverContainerPointsTitleWidth - 10

      const widthViewFinal = (partialPercentage / 100) * widthView

      setWidthPointsLine(widthViewFinal)
    }

    handleCalculePorcentagePointDriver()
  }, [
    data.points,
    firstDriverPoints,
    pointsContainerWidth,
    driverContainerPointsTitleWidth,
  ])

  useEffect(() => {
    setTimeout(() => {
      function load() {
        Animated.timing(progress, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start()
      }

      load()
    }, 500)
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
            colorTeam={getTeamColors[data.Constructors[0].constructorId]}
          />
        </S.PositionContent>

        <S.DriverContainer>
          <S.DriverContainerInfos>
            <S.DriverAvatar>
              <S.Avatar source={driversFrontImages[data.Driver.driverId]} />
            </S.DriverAvatar>
            <S.DriverContent>
              <S.DriverContentHeader>
                <S.DriverRoundedFlag>
                  <S.DriverRoundedFlagImage
                    isoCode={getIsoCountry[data.Driver.nationality]}
                  />
                </S.DriverRoundedFlag>
                <S.DriverName>
                  {data.Driver.givenName + ' ' + data.Driver.familyName}
                </S.DriverName>
              </S.DriverContentHeader>
              <S.PointsContainer
                onLayout={({ nativeEvent }) => {
                  setPointsContainerWidth(nativeEvent.layout.width)
                }}
              >
                <S.PointsContainerPercentage>
                  <S.PointsContainerPercentageLine style={{ width }} />
                </S.PointsContainerPercentage>
                <S.DriverContainerPointsTitle
                  onLayout={({ nativeEvent }) => {
                    setDriverContainerPointsTitleWidth(nativeEvent.layout.width)
                  }}
                >
                  {data.points}
                </S.DriverContainerPointsTitle>
              </S.PointsContainer>
            </S.DriverContent>
          </S.DriverContainerInfos>
          <S.DriverContainerButton>
            <S.DriverContainerButtonIcon />
          </S.DriverContainerButton>
        </S.DriverContainer>
      </S.HeaderContainer>
    </S.Container>
  )
}
