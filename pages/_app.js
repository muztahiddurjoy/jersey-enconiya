import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import theme from '../styles/themes/muiThemes'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </ThemeProvider>
    </div>)
}

export default MyApp
