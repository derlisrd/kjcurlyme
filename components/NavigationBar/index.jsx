import React from 'react'
import Link from  "next/link";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useColorModeValue,Link as LinkStyle, Box, Container, Flex, Stack, Menu, MenuButton, IconButton, MenuList, MenuItem} from '@chakra-ui/react'
import Logo from '../Logo'
import ToogleTheme from '../Buttons/ToogleTheme';


const LinkItem = ({href, path, children})=>
{
    const active = path === href
    const inactiveColor = useColorModeValue('gray900','whiteAlpha.900');
    
    return(
        <Link href={href}  >
            <LinkStyle p={2} bg={active ? '' : ''} as="span" sx={{ fontVariant:'all-petite-caps' }} 
                color={active  ? 'silver' : inactiveColor} display="block"
            >
                {children}
            </LinkStyle>
        </Link>
    )

}

const NavigationBar = ({path,...rest}) => {
  return (
    <Box position="fixed" as='nav' w="100%" bg={useColorModeValue('#ffffff40','#10102380')} style={{ backdropFilter: 'blur(10px)' }} zIndex={1} {...rest}>
       <Container display="flex" p={2} maxWidth="container.lg" flexWrap="wrap" alignItems="center" justifyContent="space-between">
            <Flex>
                <Logo />
            </Flex>
            <Stack direction={{ base:'column', md:'row' }}
            display={{ base:'none', md:'flex' }} width={{ base:'full',md:'auto' }} alignItems="center" flexGrow={1} mt={{ base:4, md:0 }}
            >
                <LinkItem path={path} href="/" > Inicio </LinkItem>
                <LinkItem path={path} href="/tienda/productos" > Tienda </LinkItem>
                <LinkItem path={path} href="/contacto" > Contacto </LinkItem>
            </Stack>


            <Box flex={1} align="right" w="100%" flexDirection="row" display="flex" justifyContent="flex-end" >
                <ToogleTheme />
                <Box ml={1} display={{ base:'inline-block', md:'none' }}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon fontVariant="outlined" />}  ></MenuButton>
                        <MenuList>
                            <MenuItem ><LinkItem path={path} href="/" > Inicio </LinkItem></MenuItem>
                            <MenuItem ><LinkItem path={path} href="/tienda/productos" > Tienda </LinkItem></MenuItem>
                            <MenuItem><LinkItem path={path} href="/contacto" > Contacto </LinkItem></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>

       </Container>
    </Box>
  )
}

export default NavigationBar
