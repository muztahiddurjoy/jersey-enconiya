import { Grid } from '@mui/material'
import Head from 'next/head'
import Categories from '../components/Home/Categories/Categories'
import Slider from '../components/Home/Slider/Slider'
import TopProductsHome from '../components/Products/TopProductsHome/TopProductsHome'
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
   </Head>
   <main className={style.topMargin}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Slider/>
          <Categories/>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TopProductsHome/>
        </Grid>
    </Grid>
   </main>
   </>
  )
}
