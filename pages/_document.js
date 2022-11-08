import { ColorModeScript } from "@chakra-ui/react";
import Document,{Html, Head, Main, NextScript} from "next/document";
import theme from '../Contexts/theme'

export default class Doc extends Document{

    render(){
        return(
            <Html lang="es">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}