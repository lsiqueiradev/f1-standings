import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { useAuth } from '@hooks/useAuth'

import { useTheme } from 'styled-components'

import { Loading } from '@components/Loading'

import { AppRoutes } from './app.routes'

export function Routes() {
  const { COLORS } = useTheme()
  const { isFetchUserLoading } = useAuth()

  if (isFetchUserLoading) {
    return <Loading />
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.GRAY_900,
    },
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <AppRoutes />
    </NavigationContainer>
  )
}
