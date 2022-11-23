import 'styled-components'
import { lightTheme } from '../themes'

declare module 'styled-components' {
  type ThemeType = typeof lightTheme

  export interface DefaultTheme extends ThemeType {}
}
