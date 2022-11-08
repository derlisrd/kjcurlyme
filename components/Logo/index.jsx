import { Box } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <h1>
      <Box as='span' __css={{ fontWeight:'bold',color:'#dfce7c',fontSize:'1.8rem',mr:2,ml:2 }} >KJ</Box>
      <Box as='span' sx={{ fontWeight:'light', color:'#b9942d',fontVariant:'all-petite-caps',mr:5 }} >Curly.me</Box>
    </h1>
  )
}

export default Logo
