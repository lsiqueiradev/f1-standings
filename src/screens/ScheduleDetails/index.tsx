/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { format } from 'date-fns'
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { countriesImages } from '@utils/getNamesImages'

import { Results } from './Results';
import { Informations } from './Informations';

import * as S from './styles'

interface RouteParams {
  round: string
  title: string
  name: string
  firstDate: string
  lastDate: string
  country: string
  isSprint: string
}

const { Navigator, Screen } = createMaterialTopTabNavigator()

export function ScheduleDetails() {
  const { COLORS, FONT_FAMILY } = useTheme()
  const { setOptions } = useNavigation()
  const route = useRoute()
  const { title, round, name, firstDate, lastDate, country, isSprint } = route.params as RouteParams

  useEffect(() => {
    setOptions({
      title,
    })
  }, [title, setOptions])

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.HeaderContentRaceRound>
            Round {round}
          </S.HeaderContentRaceRound>
          <S.HeaderContentRaceName>
            {name}
          </S.HeaderContentRaceName>
          <S.HeaderContentRaceDate>
            {format(new Date(firstDate), 'dd LLL')} -{' '}
            {format(new Date(lastDate), 'dd LLL uuu')}
          </S.HeaderContentRaceDate>
        </S.HeaderContent>
        <S.Country
          source={
            countriesImages[country.replace(' ', '').toLocaleLowerCase()]
          }
          resizeMode="contain"
        />
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
            round
          }}
          options={{
            tabBarLabel: 'Informations',
          }}
        />
        <Screen
          name="results"
          component={Results}
          initialParams={{
            round,
            isSprint
          }}
          options={{
            tabBarLabel: 'Results',
          }}
        />
      </Navigator>
    </S.Container>
  )
}
