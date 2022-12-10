import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '@screens/Drivers/Details'
import { Platform, Pressable, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

const { Navigator, Screen } = createNativeStackNavigator()

export function DriverRoutes() {
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
        name="driver-details"
        component={Details}
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
          title: 'Driver details',
        }}
      />
    </Navigator>
  )
}
