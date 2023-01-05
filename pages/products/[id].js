import React, { useEffect } from 'react'
import {db} from '../../firebase'
import {get,ref,child} from 'firebase/database'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { Chip, Grid, Icon, IconButton, Typography, ButtonGroup, Button } from '@mui/material'
import Head from 'next/head'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import { Box, Stack } from '@mui/system'
import { Favorite, FavoriteOutlined } from '@mui/icons-material'
function getProductData(){
    return get(child(ref(db),'/products')).then((snap)=>{
        if(snap.exists()){
            return snap.val()
        }
        else{
            return null
        }
    })
}
export async function getServerSideProps(context){
    const result = await getProductData()
    return {
        props:{
            data: result
        }
    }
}
const ProductPage = ({data}) => {
    
    
  return (
    <div className={styles.topMargin}>
        <Head>
            <title>Product Title</title>
        </Head>
        <Grid spacing={3} container sx={{}}>
            <Grid item xs={12} md={4} lg={4}>
                <Swiper
                 slidesPerView={1}
                 loop
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 autoplay={true}
                 pagination={{clickable:true}}>
                    <SwiperSlide>
                        <Image src="/single.png" height={400} width={400} alt="Enconiya Jersey Shop"/>
                    </SwiperSlide>
                </Swiper>
            </Grid>
            <Grid item xs={12} md={8} lg={8} display="flex" justifyContents="center" flexDirection="column">
                <Typography variant="h4" color="black">Argentina WC Jersey Home - Player Edition</Typography>
                <Typography variant="h5" color="primary" sx={{my:2}}>1000 Taka</Typography>
                <Box sx={{ml:3}}>
                <Chip label="Random Chip" variant="outlined"/>
                <Chip label="Random Chip" variant="outlined"/>
                <Chip label="Random Chip" variant="outlined"/>
                <Chip label="Random Chip" variant="outlined"/>
                </Box>
                <Box sx={{my:2}} display="flex" alignItems="center">
                    <IconButton>
                        <FavoriteOutlined/>
                    </IconButton>
                    <Typography variant="body2" color="black">Add to Wishlist</Typography>
                </Box>
                <Box sx={{my:3}}>
                    <Box display="flex" alignItems="end"><Typography variant="h6" color="black" sx={{mr:0.5}}>Sizes</Typography><Typography variant="body2" color="black"> (UK)</Typography></Box>
                    <Grid container sx={{my:1}}>
                        <Grid item xs={6}>

                        </Grid>
                        
                    </Grid>
                </Box>
                <Box display="flex" alignItems="center">
                  <Button variant="text" sx={{mx:2,width:'154px'}}>Add to Cart</Button>
                  <Button variant="contained" sx={{width:'154px',color:'#ffffff'}}>Buy Now</Button>
                </Box>
            </Grid>
        </Grid>
        <Box>

        </Box>
    </div>
  )
}

export default ProductPage