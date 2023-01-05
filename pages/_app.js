import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import theme from '../styles/themes/muiThemes'
import {globalCont} from '../contexts/globalContexts'
import { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState(null)
  const [cart, setcart] = useState(null)
  return (
    <div>
      <Head>
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      </Head>
      <globalCont.Provider value={{user,setuser,cart,setcart}}>
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
        </ThemeProvider>
      </globalCont.Provider>
    </div>)
}

export default MyApp