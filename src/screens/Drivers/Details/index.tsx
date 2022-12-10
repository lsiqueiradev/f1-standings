/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { driversImages } from '@utils/getNamesImages'

import { Results } from './Results';
import { Informations } from './Informations';

import * as S from './styles'
import { getIsoCountry, getTeamColors } from '@utils/helpers';

interface RouteParams {
  givenName: string
  familyName: string
  driverId: string
  constructorId: string
  driverPermanentNumber: string
  constructorName: string
  nationality: string
}

const { Navigator, Screen } = createMaterialTopTabNavigator()

export function Details() {
  const { COLORS, FONT_FAMILY } = useTheme()
  const { setOptions } = useNavigation()
  const route = useRoute()
  const {
    givenName,
    familyName,
    driverId,
    driverPermanentNumber,
    constructorId,
    constructorName,
    nationality
  } = route.params as RouteParams

  useEffect(() => {
    setOptions({
      title: givenName + ' ' + familyName,
    })
  }, [givenName, familyName, setOptions])

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.LineTeamColor constructorId={getTeamColors[constructorId]} />
          <S.Box>
            <S.HeaderContentDriverBoxName>
              <S.DriverRoundedFlag>
                <S.DriverFlag
                  isoCode={getIsoCountry[nationality]}
                />
              </S.DriverRoundedFlag>
              <S.HeaderContentDriverBox>
                <S.HeaderContentDriverName>{givenName}</S.HeaderContentDriverName>
                <S.HeaderContentDriverNameStrong>{familyName}</S.HeaderContentDriverNameStrong>
              </S.HeaderContentDriverBox>
            </S.HeaderContentDriverBoxName>
            <S.HeaderContentConstructorContent>
              <S.HeaderContentConstructorContentNumber>
                <S.HeaderContentConstructorContentNumberText>{driverPermanentNumber}</S.HeaderContentConstructorContentNumberText>
              </S.HeaderContentConstructorContentNumber>
              <S.HeaderContentConstructorContentTitle>{constructorName}</S.HeaderContentConstructorContentTitle>
            </S.HeaderContentConstructorContent>
          </S.Box>
        </S.HeaderContent>
        <S.HeaderDriverAvatar source={driversImages[driverId]} resizeMode="contain" />
      </S.HeaderContainer>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLORS.GRAY_900,

          },
          tabBarLabelStyle: {
            fontSize: RFValue(12),
            fontFamily: FONT_FAMILY.BOLD,
            color: COLORS.GRAY_100
          },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.GRAY_100
          }
        }}
      >
        <Screen
          name="schedule-infomations"
          component={Informations}
          initialParams={{
            driverId,
            givenName,
            familyName
          }}
          options={{
            tabBarLabel: 'Informations',
          }}
        />
        <Screen
          name="results"
          component={Results}
          initialParams={{
            driverId
          }}
          options={{
            tabBarLabel: 'Results',
          }}
        />
      </Navigator>
    </S.Container>
  )
}
