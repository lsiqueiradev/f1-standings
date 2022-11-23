import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { Pressable, Text, Platform } from 'react-native'

import { Profile } from '@screens/Profile'
import { Settings } from '@screens/Settings'
import { RFValue } from 'react-native-responsive-fontsize'

const { Navigator, Screen } = createNativeStackNavigator()

export function ProfileRoutes() {
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
        name="profile"
        component={Profile}
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
          title: 'Perfil',
        }}
      />
      <Screen
        name="settings"
        component={Settings}
        options={{
          title: 'Configurações',
        }}
      />
    </Navigator>
  )
}
