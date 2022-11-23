import { ReactNode } from 'react'

import { AuthContextProvider } from '@contexts/AuthContext'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}

export { AppProvider }
