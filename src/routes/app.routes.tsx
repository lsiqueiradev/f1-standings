import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'

import { TabRoutes } from './tab.routes'
import { RaceRoutes } from './race.routes'
import { DriverRoutes } from './driver.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        headerTitleStyle: {
          color: COLORS.WHITE,
          fontFamily: FONT_FAMILY.BOLD,
          fontSize: RFValue(16),
        },
        headerBackTitle: 'Voltar',
        headerTintColor: COLORS.WHITE,
        presentation: 'modal',
      }}
    >
      <Screen
        name="tab-app"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="race-stack"
        component={RaceRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="driver-stack"
        component={DriverRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}
