import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'

import { Pressable, Text, Platform } from 'react-native'

import { ScheduleDetails } from '@screens/ScheduleDetails'
import { Laps } from '@screens/ScheduleDetails/Laps'

const { Navigator, Screen } = createNativeStackNavigator()

export function RaceRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme()
  const { goBack } = useNavigation()
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
          ...Platform.select({
            ios: {
              height: 60,
            },
          }),
        },
        headerTitleStyle: {
          color: COLORS.WHITE,
          fontFamily: FONT_FAMILY.BOLD,
          fontSize: RFValue(16),
        },
        headerBackTitleVisible: false,
        headerTintColor: COLORS.WHITE,

        ...Platform.select({
          ios: {
            headerStatusBarHeight: 0,
          },
        }),
      }}
    >
      <Screen
        name="race-details"
        component={ScheduleDetails}
        options={{
          ...Platform.select({
            ios: {
              headerLeft: () => null,
              headerRight: () => (
                <Pressable
                  onPress={() => goBack()}
                  style={{
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.WHITE,
                      fontFamily: FONT_FAMILY.BOLD,
                      fontSize: RFValue(14),
                    }}
                  >
                    OK
                  </Text>
                </Pressable>
              ),
            },
          }),
          title: 'Circuito',
        }}
      />
      <Screen
        name="schedule-laps"
        component={Laps}
        options={{
          title: 'Race Lap by lap',
        }}
      />
    </Navigator>
  )
}
