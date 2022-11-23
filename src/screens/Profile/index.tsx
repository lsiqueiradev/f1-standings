import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'

import * as S from './styles'

export function Profile() {
  const { navigate } = useNavigation()
  return (
    <S.Container>
      <S.Text>Profile</S.Text>
      <Button title="Configurações" onPress={() => navigate('settings')} />
    </S.Container>
  )
}
