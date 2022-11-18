import { Grid } from '@mui/material'
import Head from 'next/head'
import Categories from '../components/Home/Categories/Categories'
import Slider from '../components/Home/Slider/Slider'
import style from '../styles/Home.module.css'

// export async function getServerSideProps(){
//   return {

//   }
// }

export default function Home() {
  return (
   <>
   <Head>
      <title>Enconiya</title>
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
   </Head>
   <main className={style.topMargin}>
    <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <Slider/>
          <Categories/>
        </Grid>
    </Grid>
   </main>
   </>
  )
}
