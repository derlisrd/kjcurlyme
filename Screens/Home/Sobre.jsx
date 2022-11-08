import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import kelly from '../../Assets/img/kelly.jpg'
import Image from 'next/image'


const Sobre = () => {
  return (
    <Box p={3} mt={6}>
    <Grid gap={4} templateColumns={{ base:'repeat(1,1fr)',md:'repeat(2,1fr)' }} justifyContent="center" alignItems="center">
        <GridItem>
        <Box as="h1" sx={{ fontSize:"2rem" }}>Sobre KJ curly me</Box>

        <p sx={{ fontVariant:'all-petite-caps' }}>
        Al fundar KJ curly.me, tenía un solo objetivo en mente: crear una tienda que ofreciera buena calidad y con las mejores opciones para complementar tu estilo.
        Sarelly cuenta con productos importados y hechos a mano, contamos con dos tiendas físicas.
        Una en San Lorenzo y otra en Asunción en el Paseo Lillo, desde las tiendas también se realizan los envíos a todo el país.
        Los materiales con los que trabajamos son: Plata Esterlina 925, Cobre + Plata, Rodio, Acero Inoxidable, Baños de Oro 14k, 18k, 24k y Goldfield.
        Sabemos que cada compra es importante, por eso procuramos que todo el proceso sea lo más agradable posible.
        ¡Contacta con nosotras y compruébalo!
            </p>
        </GridItem>

        <GridItem>
        <Image src={kelly} alt="Kelly" />
        </GridItem>


    </Grid>
    </Box>
  )
}

export default Sobre
