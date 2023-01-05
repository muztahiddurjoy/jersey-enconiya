import React from 'react'
import style from '../styles/Home.module.css'
import Typography from '@mui/material/Typography'
import {db} from '../firebase'
import {get,ref,child} from 'firebase/database'
import SlideAdapter from '../components/Home/Categories/SlideAdapter/SlideAdapter'
import { Grid } from '@mui/material'
import Link from 'next/link'
const getTeams = ()=>{
    return get(child(ref(db),'/teams')).then((res)=>{
        if(res.exists()){
            return res.val()
        }
        else{
            return null
        }
    })
}

export async function getServerSideProps({query}) {
   const data = await getTeams()
   return {
     props: {
       data: Object.values(data)
     },
   }
 }

const ShopByTeams = ({data}) => {
  return (
    <div className={style.topMargin}>
        <Typography variant="h5" color="primary">Select Your Favorite Team</Typography>
        <Typography variant="body2" color="grey">Click on the icons to see the products</Typography>
        <Grid container spacing={1} sx={{mt:2}}>
            {Array.isArray(data) ? data.map((v,i)=> <Grid key={i} item xs={6} sm={6} md={4} lg={2}>
                <Link href={`/teams/${v.link}`} style={{textDecoration:'none'}}>
                    <SlideAdapter img={v.icon} name={v.name}/>
                </Link>
            </Grid>) : <Grid item lg={12}><Typography variant="body1" color="grey" align="center">Coming soon...</Typography></Grid>}
            
        </Grid>
    </div>
  )
}

export default ShopByTeams