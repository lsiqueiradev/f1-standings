import { createStackNavigator } from '@react-navigation/stack'

import { Results } from '@screens/Results'

const { Navigator, Screen } = createStackNavigator()

export function RacingRoutes() {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        name="results"
        component={Results}
        options={{
          title: 'Results',
        }}
      />
    </Navigator>
  )
}
