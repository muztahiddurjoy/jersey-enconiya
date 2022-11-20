import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import style from '../styles/Home.module.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'


const CustomError = () => {
  return (
    <div className={style.topMargin}>
        <Box 
            sx={{
                width:'100%',
                height:'80vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column'}}>
                    <Image src="/robot.png" height={241.77} width={166.666} alt="Robot Image"/>
                    <Typography variant="h3" color="error">Opps!</Typography>
                    <Typography variant="h6" color="error">The page you are trying to access does not exist!</Typography>
                    <Typography variant="body2" color="gray" sx={{mt:1}}>Page you have been looking fot might have removed or unavailable. </Typography>
                    <Link href="/">
                        <Button variant="contained" color="primary" sx={{mt:3}}>
                        Go Back to Home
                        </Button>
                    </Link>
        </Box>
    </div>
  )
}

export default CustomError