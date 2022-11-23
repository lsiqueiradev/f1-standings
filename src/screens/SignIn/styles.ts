import { ButtonSocial } from '@components/ButtonSocial'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  paddingHorizontal: 20,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const LogoContainer = styled.View`
  margin-top: 100px;

  flex-direction: row;
  justify-content: center;

  margin-bottom: 30px;
`

export const LogoLeft = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${RFValue(30)}px;
`
export const LogoRight = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${RFValue(30)}px;
`

export const Form = styled.View`
  align-items: center;
`

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 30px;
`

export const ForgotPasswordContainer = styled.View`
  align-items: flex-end;
  margin-top: 10px;
`

export const ForgotPasswordButton = styled.Pressable``

export const ForgotPasswordText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const OrBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 10px 0 20px;
`

export const OrBoxSplit = styled.View`
  width: 30px;
  height: 1px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const OrBoxText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin: 0 16px;
`

export const ButtonSocialContent = styled.View`
  margin-bottom: 40px;
`

export const ButtonGoogleSignIn = styled(ButtonSocial)`
  margin-bottom: 15px;
`
export const ButtonAppleSignIn = styled(ButtonSocial)``
