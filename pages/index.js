import { Grid } from '@mui/material'
import Head from 'next/head'
import { useEffect } from 'react'
import Categories from '../components/Home/Categories/Categories'
import Slider from '../components/Home/Slider/Slider'
import TopProductsHome from '../components/Products/TopProductsHome/TopProductsHome'
import style from '../styles/Home.module.css'
import {db} from '../firebase'
import {get,child,ref} from 'firebase/database'
import axios from 'axios'


function fetchProduct() {
  return get(child(ref(db),'/')).then((snap)=>{
    if(snap.exists()){
      return snap.val()
    }
    else{
      return null
    }
  })
}

export async function getServerSideProps({query}) {
   const data = await fetchProduct()
   const carousel = data.carousel
  return {
    props: {
      carousel: Object.values(carousel)
    },
  }
}

export default function Home({carousel}) {
  
  return (
   <>
   <Head>
      <title>Enconiya</title>
   </Head>
   <main className={style.topMargin}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Slider carousel={carousel}/>
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
