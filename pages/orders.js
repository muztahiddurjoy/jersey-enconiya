import React, { useState } from 'react'
import style from '../styles/Home.module.css'
import Typography from '@mui/material/Typography'
import { Alert, Avatar, Chip, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Snackbar } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { CopyAll } from '@mui/icons-material'


const Order = () => {
    const [snack, setsnack] = useState(false)
  return (
    <div className={style.topMargin}>
        <Typography variant="h5" color="primary">My Orders</Typography>
        <Typography variant="body2" color="grey">Present and previous orders</Typography>
        <List sx={{mt:2}}>
            <ListItem secondaryAction={
                <Box display="flex" flexDirection="column" alignItems="end" justifyContent="end">
                    <Stack direction="row" alignItems="center">
                       <Typography variant="body2" color="grey" sx={{mx:1}}>Order ID : Random</Typography>
                        <IconButton onClick={setsnack}>
                            <CopyAll/>
                        </IconButton>
                    </Stack>
                    <Box>
                        <Chip label="Delivered" color='primary'/>
                    </Box>
                </Box>
            }>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText
                primary="Random Title"
                secondary="Random Text"/>
            </ListItem>
            <Divider sx={{my:1}}/>
        </List>
        <Snackbar open={snack} autoHideDuration={2000} onClose={e=> setsnack(false)}>
            <Alert severity='success'>
                Order ID Copied
            </Alert>
        </Snackbar>
    </div>
  )
}

export default Order