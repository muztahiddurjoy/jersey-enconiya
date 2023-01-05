import { Paper, Typography, ButtonGroup, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import style from '../Products/ProductCard/ProductCard.module.css'
import Image from 'next/image'
import { CopyAll, Delete } from '@mui/icons-material'
const WishlistCard = ({img,name,price,icon}) => {
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
        <center>
        <ButtonGroup variant="outlined" aria-label="Wishlist Actions">
          <Button startIcon={<CopyAll/>} color="primary">Copy Link</Button>
          <Button startIcon={<Delete/>} color="error">Remove</Button>
        </ButtonGroup>
        </center>
    </Paper>
  )
}

export default WishlistCard