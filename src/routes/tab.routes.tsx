import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { House, FlagCheckered, List, Calendar } from 'phosphor-react-native'

import { useTheme } from 'styled-components'

import { Platform } from 'react-native'

import { Home } from '@screens/Home'
import { Racing } from '@screens/Racing'
import { Schedule } from '@screens/Schedule'
import { Standing } from '@screens/Standing'
import { RFValue } from 'react-native-responsive-fontsize'
import { UserPhotoButton } from '@components/UserPhotoButton'

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
        },
        headerRight: () => <UserPhotoButton />,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <House color={color} size={24} weight="fill" />
          ),
        }}
      />
      <Screen
        name="schedule"
        component={Schedule}
        options={{
          title: 'Schedule',
          tabBarIcon: ({ color }) => (
            <Calendar color={color} size={24} weight="fill" />
          ),
        }}
      />
      <Screen
        name="standing"
        component={Standing}
        options={{
          title: 'Standings',
          tabBarIcon: ({ color }) => (
            <List size={30} color={color} weight="fill" />
          ),
        }}
      />
      <Screen
        name="racing"
        component={Racing}
        options={{
          title: 'Racing',
          tabBarIcon: ({ color }) => (
            <FlagCheckered color={color} size={24} weight="fill" />
          ),
        }}
      />
    </Navigator>
  )
}
