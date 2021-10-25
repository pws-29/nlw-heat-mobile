// React native vem com o flexbox habilitado por padrão
import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper' //espaçamento da status bar dos celulares

export const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupar a tela toda
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17,
  }
})