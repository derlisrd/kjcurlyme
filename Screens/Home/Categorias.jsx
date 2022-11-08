import { Box, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import anillos from '../../Assets/img/anillos.jpg'
import collares from '../../Assets/img/collares.jpg'
import brillantes from '../../Assets/img/brillantes.jpg'

const Categorias = () => {
  return (
    <Box my={5}>
        
    <Grid templateColumns={{ base:'repeat(1,1fr)',md:'repeat(3,1fr)' }} gap={3}>
      <GridItem>
        <Image src={anillos} alt="anillos" />
      </GridItem>
      <GridItem>
        <Image src={collares}  alt="collares" />
      </GridItem>
      <GridItem>
        <Image src={brillantes} alt="brillantes" />
      </GridItem>
    </Grid>
    </Box>
  )
}

export default Categorias
