import { Box } from "@chakra-ui/react"
import Copy from "../Screens/Copy"
import Footer from "../Screens/Footer"
import Categorias from "../Screens/Home/Categorias"
import Home from "../Screens/Home/Home"
import Sobre from "../Screens/Home/Sobre"



const Page = () => {
  return (
    <Box mt={5} p={5}  >
      <Home />
      <Categorias />
      <Sobre />
      <Footer />
      <Copy />
    </Box>
  )
}

export default Page
