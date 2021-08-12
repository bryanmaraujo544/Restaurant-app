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
    }
    
    html {
      font-size: 62.5%;

      @media(max-width: 1024px){
        font-size: 9px;
      }
    }

    body{
      max-width: 100vw;
      font-family: 'Poppins', sans-serif;
      background: ${theme.colors.background};
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
