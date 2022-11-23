import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab.routes'
import { ProfileRoutes } from './profile.routes'

import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScheduleRoutes } from './schedule.routes'
import { StandingRoutes } from './standing.routes'

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
        name="profile-stack"
        component={ProfileRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="schedule-stack"
        component={ScheduleRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="standing-stack"
        component={StandingRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}
