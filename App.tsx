/* eslint-disable camelcase */
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { Platform, useColorScheme } from 'react-native'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

import FlashMessage from 'react-native-flash-message'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './src/themes'

import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'
import { AppProvider } from '@hooks/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? 'dark' : 'light'

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ActionSheetProvider useNativeDriver>
        <AppProvider>
          <StatusBar style="light" />
          {fontsLoaded ? <Routes /> : <Loading />}
        </AppProvider>
      </ActionSheetProvider>
      <FlashMessage
        position="top"
        hideStatusBar={false}
        statusBarHeight={
          Platform.OS === 'android' ? Constants.statusBarHeight : undefined
        }
        floating
      />
    </ThemeProvider>
  )
}
