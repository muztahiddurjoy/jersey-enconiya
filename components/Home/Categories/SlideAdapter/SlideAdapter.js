import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SlideAdapter = ({img,name}) => {
  return (
        <Paper variant="outlined" sx={{m:1,p:1}}>
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
            <img src={img} alt={name} height="50px"/>
            <Typography variant="body1" color="secondary" align='center'>{name}</Typography>
            </Box>
        </Paper>
  )
}

export default SlideAdapter