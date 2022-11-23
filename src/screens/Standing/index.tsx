import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { useTheme } from 'styled-components'

import { RFValue } from 'react-native-responsive-fontsize'

import { Drivers } from './Drivers'
import { Constructors } from './Constructors'

const { Navigator, Screen } = createMaterialTopTabNavigator()

export function Standing() {
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
        name="standing-drivers"
        component={Drivers}
        options={{
          tabBarLabel: 'Drivers',
        }}
      />
      <Screen
        name="standing-constructors"
        component={Constructors}
        options={{
          tabBarLabel: 'Constructors',
        }}
      />
    </Navigator>
  )
}
