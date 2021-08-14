import { createGlobalStyle, ThemeProvider } from "styled-components"
import { AnimatePresence } from 'framer-motion'
import { theme } from "theme"

const GlobalStyle = createGlobalStyle `
    * {
      margin:0;
      padding: 0;
      background: none;
      border: none;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }
    
    html {
      font-size: 62.5%;

      @media(max-width: 768px){
        font-size: 8px;
      }
    }

    body{
      max-width: 100vw;
      font-family: 'Poppins', sans-serif;
      background: ${theme.colors.background};
      padding: 0 128px;

      @media screen and (max-width: 1366px){
        padding: 0px 64px;
      }

      @media screen and (max-width: 768px){
          padding: 0px 32px;
      }

      @media screen and (max-width: 480px){
          padding: 0px 24px;
      }
    }
`

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
    
  )
}

export default MyApp
