import React from 'react'
import { Grid } from '@mui/material'
import ProductCard from '../ProductCard/ProductCard'

const TopProductsHome = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/bra.png" name="Brazil WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg2.png" name="Argentina WC Jersey Away - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
            <ProductCard img="/arg.png" name="Argentina WC Jersey Home - Player Edition" price={1000} icon="/fifa.png"/>
        </Grid>
    </Grid>
  )
}

export default TopProductsHome