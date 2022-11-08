import Head from "next/head";
import { Box,Container } from "@chakra-ui/react";
import NavigationBar from '../NavigationBar'

const LayoutMain = ({children,router})=>{
    
    return(
    <Box as="main" pb={8}>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>KJ Curly.me | ACCESORIOS ACERO QUIRÚRGICO</title>
        </Head>
        <NavigationBar path={router.asPath} />
        <Container maxW="container.lg" pt={12}>
            {children}
        </Container>
    </Box>
    )
}

export default LayoutMain;