import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import { foundations } from './foundations'
import { styles } from './styles'

// config for colorMode and font faces can be done here. Also, if you don't pretend to use chakra default theme, be sure to config foundations and components to fit your needs, or else disable the resetCSS prop on the chakra provider
export const theme = extendTheme({
  components,
  styles,
  ...foundations
})
