import { Divider, Typography, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import CatAdapter from './CatAdapter/CatAdapter'
import SlideAdapter from './SlideAdapter/SlideAdapter'

const Categories = () => {
  return (
    <Box>
      <Divider variant='fullWidth'  sx={{my:2}}>
        <Typography variant="body1" color="secondary">Shop by team</Typography>
      </Divider>
      <Swiper slidesPerView={4}
      autoplay={true}>
        <SwiperSlide>
          <SlideAdapter img="/surface1.svg" name="Argentina"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <SlideAdapter img="/layer1.svg" name="Brazil"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <SlideAdapter img="/layer2.svg" name="Barcelona"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <SlideAdapter img="/layer3.svg" name="Real Madrid"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <SlideAdapter img="/surface1.svg" name="Argentina"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <SlideAdapter img="/surface1.svg" name="Argentina"/>
        </SwiperSlide>
      </Swiper>

      <Divider variant='fullWidth'  sx={{my:2}}>
        <Typography variant="body1" color="secondary">Shop by leagues</Typography>
      </Divider>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CatAdapter img="/vector.svg" name="Fifa World Cup" sty={0} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/11.svg" name="Uefa Champions League" sty={1} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/3.svg" name="Uefa Europa League" sty={2} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/4.svg" name="English Premiere League" sty={3} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/5.svg" name="La Liga" sty={4} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/6.svg" name="Fifa World Cup" sty={5} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/7.svg" name="Fifa World Cup" sty={6} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/8.svg" name="Fifa World Cup" sty={7} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/9.svg" name="Fifa World Cup" sty={8} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/10.svg" name="Fifa World Cup" sty={9} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/11.svg" name="Fifa World Cup" sty={10} link="/nunu"/>
        </Grid> 
        <Grid item xs={6}>
          <CatAdapter img="/11.svg" name="Fifa World Cup" sty={11} link="/nunu"/>
        </Grid> 
      </Grid>
    </Box>
  )
}

export default Categories