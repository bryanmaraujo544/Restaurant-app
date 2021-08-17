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
      color: "#330000";

    }
    
    html {
      font-size: 62.5%;
      
      @media(max-width: 768px){
        font-size: 8px;
      }
      

    }
    
    body{
      max-width: 100vw;
      background-color: #fffafa;
      height: 100%;
      font-family: 'Poppins', sans-serif;
      overflow-x: hidden;
      padding: 0 96px;

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
