import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface HeaderContentConstructorProps {
  constructorId: string
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`
export const HeaderContainer = styled.View`
  padding: 10px 20px 0;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const HeaderContent = styled.View<HeaderContentConstructorProps>`
  border-left-width: 4px;
  border-left-color: ${({ constructorId }) => constructorId};
  padding-left: 10px;

  justify-content: space-between;
`

export const HeaderContentDriverName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(15)}px;
  margin-bottom: 2px;
`

export const HeaderContentDriverNameStrong = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(14)}px;
`

export const HeaderDriverAvatar = styled.Image`
  width: 130px;
  height: 110px;
`

export const HeaderContentConstructorContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
  margin-top: 8px;
`

export const HeaderContentConstructorContentNumber = styled.View`
  margin-right: 8px;
  padding-right: 8px;
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const HeaderContentConstructorContentNumberText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(13)}px;
`

export const HeaderContentConstructorContentTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(13)}px;
`
