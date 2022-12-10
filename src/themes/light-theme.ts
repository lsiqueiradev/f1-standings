import { defaultTheme } from './default'

export const lightTheme = {
  ...defaultTheme,
  IS_DARK: false,
  COLORS: {
    GRAY_900: '#FFFFFF',
    GRAY_800: '#F1F1F1',
    GRAY_700: '#f1f1f3',
    GRAY_600: '#B0B0BA',
    GRAY_500: '#7C7C8A',
    GRAY_400: '#323238',
    GRAY_300: '#29292E',
    GRAY_200: '#202024',
    GRAY_100: '#121214',
    ...defaultTheme.COLORS,
  },
}
