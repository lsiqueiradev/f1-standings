import { defaultTheme } from './default'

export const darkTheme = {
  ...defaultTheme,
  IS_DARK: true,
  COLORS: {
    GRAY_900: '#000000',
    GRAY_800: '#121214',
    GRAY_700: '#121214',
    GRAY_600: '#616161',
    GRAY_500: '#29292E',
    GRAY_400: '#323238',
    GRAY_300: '#7C7C8A',
    GRAY_200: '#C4C4CC',
    GRAY_100: '#E1E1E6',
    ...defaultTheme.COLORS,
  },
}
