import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Platform } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Results } from '@screens/Results'
import { Drivers } from '@screens/Drivers'
import { Teams } from '@screens/Teams'
import { Races } from '@screens/Races'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme()

  return (
    <Navigator
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY_200,
        tabBarStyle: {
          backgroundColor: COLORS.GRAY_800,
          height: Platform.OS === 'ios' ? 90 : 70,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          fontFamily: FONT_FAMILY.BOLD,
        },
        tabBarItemStyle: {
          height: 50,
          marginTop: 8,
        },
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: COLORS.WHITE,
          fontFamily: FONT_FAMILY.BOLD,
          fontSize: RFValue(16),
          textTransform: 'uppercase',
        },
      }}
    >
      <Screen
        name="race"
        component={Races}
        options={{
          title: 'Races',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-multiselect" color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="results"
        component={Results}
        options={{
          title: 'Results',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-numbered" color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="teams"
        component={Teams}
        options={{
          title: 'Teams',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-group" color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="driver"
        component={Drivers}
        options={{
          title: 'Drivers',
          tabBarIcon: ({ color }) => (
            <Icon name="racing-helmet" color={color} size={24} />
          ),
        }}
      />
    </Navigator>
  )
}
