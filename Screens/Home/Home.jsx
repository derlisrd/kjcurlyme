import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
      <Flex justify="center" alignItems="center" minH="600px" flexDirection="column">
        <Box as='h1' display="block" sx={{ fontSize:"6rem", p:4, color:'silver', border:'3px solid silver', m:4 }} >Hello Girls!</Box>
        <Box as='h1' display="block" sx={{ textTransform:'uppercase',fontVariant:'all-petite-caps' }} >Aquí encuentras accesorios de acero quirurgicos para complementar tu outfit </Box>
      </Flex>
  )
}

export default Home
