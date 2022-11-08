import { Box } from "@chakra-ui/react"
import Categorias from "../Screens/Home/Categorias"
import Home from "../Screens/Home/Home"
import Sobre from "../Screens/Home/Sobre"



const Page = () => {
  return (
    <Box mt={5} p={5}  >
      <Home />
      <Categorias />
      <Sobre />
    </Box>
  )
}

export default Page
