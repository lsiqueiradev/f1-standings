import { Button } from '@components/Button'
import { useAuth } from '@hooks/useAuth'

import * as S from './styles'

export function Settings() {
  const { signOut } = useAuth()
  return (
    <S.Container>
      <Button title="Sair" onPress={signOut} />
    </S.Container>
  )
}
