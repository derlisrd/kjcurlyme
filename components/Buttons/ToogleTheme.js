import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const ToogleTheme = () => {

    const { toggleColorMode} = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false} >
      <motion.div>
    <IconButton aria-label='toggle-theme' colorScheme={useColorModeValue('purple','orange')} icon={useColorModeValue(<MoonIcon/>,<SunIcon />)} onClick={toggleColorMode}>
    </IconButton>
    </motion.div>
    </AnimatePresence>
  )
}

export default ToogleTheme
