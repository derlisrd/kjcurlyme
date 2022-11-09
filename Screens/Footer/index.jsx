import { Box, Grid, GridItem } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box as="footer" marginTop={6} >
      <Grid templateColumns={{ base:'repeat(1,1fr)',md:'repeat(3,1fr)' }} gap={3}>
        <GridItem>
            Copyright © 2022 KJ CURLY ME Accesorios
        </GridItem>
        <GridItem>
            Contacto
        </GridItem>
        <GridItem>
            Redes sociales
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Footer
