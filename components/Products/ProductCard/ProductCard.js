import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import style from './ProductCard.module.css'
import Image from 'next/image'
const ProductCard = ({img,name,price,icon}) => {
  return (
    <Paper variant='outlined' sx={{p:1}}>
        <Box display="flex" alignItems="center" justifyContent="center">
            <Image src={img} alt={name} className={style.productImage} height={130} width={130}/>
        </Box>
        <Box sx={{mt:-5}}>
                <img src={icon} className={style.icon}/>
        </Box>
        <Typography variant="body2" color="secondary" align='center'>{name}</Typography>
        <div className={style.stroke}></div>
        <Typography variant="h6" color="primary" align="center">{price} BDT</Typography>
    </Paper>
  )
}

export default ProductCard