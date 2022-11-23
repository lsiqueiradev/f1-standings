import { createStackNavigator } from '@react-navigation/stack'

import { Racing } from '@screens/Racing'

const { Navigator, Screen } = createStackNavigator()

export function RacingRoutes() {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        name="racing"
        component={Racing}
        options={{
          title: 'Racing',
        }}
      />
    </Navigator>
  )
}
