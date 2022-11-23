import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { useTheme } from 'styled-components'

import { RFValue } from 'react-native-responsive-fontsize'
import { Upcoming } from './Upcoming'
import { Past } from './Past'

const { Navigator, Screen } = createMaterialTopTabNavigator()

export function Schedule() {
  const { COLORS, FONT_FAMILY } = useTheme()

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(12),
          fontFamily: FONT_FAMILY.BOLD,
          color: COLORS.WHITE,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.WHITE,
        },
      }}
    >
      <Screen
        name="schedule-infomations"
        component={Upcoming}
        options={{
          tabBarLabel: 'Upcoming',
        }}
      />
      <Screen
        name="results"
        component={Past}
        options={{
          tabBarLabel: 'Past',
        }}
      />
    </Navigator>
  )
}
