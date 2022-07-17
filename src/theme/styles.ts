import { type Styles } from '@chakra-ui/theme-tools'

// call mode on the import if you intend to use colorMode from chakra-ui
export const styles: Styles = {
  global: () => ({
    '*, *::before, &::after': {
      wordWrap: 'break-word'
    },
    '*::placeholder': {
      color: 'black'
    },
    body: {
      bg: 'white',
      color: 'black',
      fontFamily: 'body',
      lineHeight: 'base',
      transition: 'all 0.2s'
    },
    'html, body, #__next': {
      height: 'auto'
    }
  })
}
