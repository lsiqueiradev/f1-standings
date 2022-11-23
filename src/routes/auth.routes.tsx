import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotPassword from '@screens/ForgotPassword'

import { StatusBar } from 'expo-status-bar'
import { useTheme } from 'styled-components'

import SignIn from '@screens/SignIn'
import { RFValue } from 'react-native-responsive-fontsize'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme()

  return (
    <>
      <StatusBar style="auto" />
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
          headerBackTitleVisible: false,
          headerTintColor: COLORS.WHITE,
        }}
      >
        <Screen
          name="sign-in"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Screen
          name="forgot-password"
          component={ForgotPassword}
          options={{
            title: 'Recuperar senha',
          }}
        />
      </Navigator>
    </>
  )
}
