import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

export function UserPhotoButton() {
  const { navigate } = useNavigation()
  return (
    <S.Container onPress={() => navigate('profile-stack')}>
      <S.Avatar
        source={{ uri: 'https://github.com/lsiqueiradev.png' }}
        resizeMode="contain"
      />
    </S.Container>
  )
}
