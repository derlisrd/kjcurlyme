import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import LayoutMain from '../components/Layout/main'
import theme from '../Contexts/theme'

const WebSite = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <LayoutMain router={router}>
        <AnimatePresence mode='wait' initial={true}>
        <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </LayoutMain>
    </ChakraProvider>
  )
}

export default WebSite
