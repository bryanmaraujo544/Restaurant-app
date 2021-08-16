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
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100vw;
      background-color: red;
      height: 100%;
      font-family: 'Poppins', sans-serif;
      

      


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
