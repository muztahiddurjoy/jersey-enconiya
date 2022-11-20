import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import style from '../../styles/Home.module.css'
import {globalCont} from '../../contexts/globalContexts'
import {db,auth} from '../../firebase'
import {ref,child,get} from 'firebase/database'
import { signOut } from 'firebase/auth'
import { Box } from '@mui/system'
import { Avatar, Typography, ButtonGroup, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, List, ListItem, Divider, Paper } from '@mui/material'
import { Edit, Email, Favorite, LocationCity, Phone, PowerSettingsNew, Shield, ShoppingBag } from '@mui/icons-material'

const UserProfile = () => {
    const {query} = useRouter()
    const router = useRouter()
    const {setuser} = useContext(globalCont)
    const [log, setlog] = useState(false)
    const [data, setdata] = useState(null)
    const [diatit, setdiatit] = useState('')
    const [diatext, setdiatext] = useState('')
    
    useEffect(() => {
        if(auth.currentUser!=null){
            if(auth.currentUser.uid!=query['id']){
                setdiatit('Access denied')
                setdiatext('Maybe you have entered the wrong URL or you are trying to see a profile which is not your.')
                setlog(true)
            }
            else{
                get(child(ref(db),`/users/${query['id']}`)).then((res)=>{
                    if(res.exists()){
                        setdata(res.val())
                    }
                })
            }
        }
        else{
            router.push('/')
        }
    }, [])
    const logout = ()=>{
        signOut(auth).then(()=>{
            setuser(null)
            setdiatit('Logged Out!')
            setdiatext('Successfully logged out')
            setlog(true)
        }).catch(()=>{
            setdiatit('Error')
            setdiatext('Please try again after something')
            setlog(true)
        })
    }
  return (
    <>
    <Head>
      <title>Enconiya</title>
   </Head>
    <div className={style.topMargin}>
    <Box sx={{width:'100%',display:'flex',alignItems:'center'}} flexDirection="column">
        <Box display="flex" alignItems="center">
            <Avatar src={data &&  (data.displayPhoto && data.displayPhoto)} alt={data && data.fullName} sx={{width:150,height:150}}/>
            <Box sx={{mx:2}}>
                <Typography variant="h4" color="secondary">{data && data.fullName}</Typography>
                <Typography variant="body1" color="grey">{data && data.email}</Typography>
            </Box> 
        </Box>
        <ButtonGroup variant="outlined" color="primary" aria-label="User Actions" sx={{mt:3}}>
          <Button startIcon={<ShoppingBag/>}>My Orders</Button>
          <Button startIcon={<Favorite/>}>Wishlist</Button>
          <Button startIcon={<Edit/>}>Edit Profile</Button>
          <Button startIcon={<PowerSettingsNew/>} color="danger" onClick={logout}>Logout</Button>
        </ButtonGroup>
        <List sx={{mt:2,width:'500px'}}>
            <ListItem sx={{my:1}}>
               <Phone color="primary"/> <Typography variant="body1" color="grey" sx={{mx:1}}>{data&& (data.phone ? data.phone : 'Not added yet')}</Typography>
            </ListItem>
            <Divider/>
            <ListItem sx={{my:1}}>
               <Email color="primary"/> <Typography variant="body1" color="grey" sx={{mx:1}}>{data&& (data.email ? data.email : 'Not added yet')}</Typography>
            </ListItem>
            <Divider/>
            <ListItem sx={{my:1}}>
               <LocationCity color="primary"/> <Typography variant="body1" color="grey" sx={{mx:1}}>{data&& (data.phone ? data.phone : 'Not added yet')}</Typography>
            </ListItem>
        </List>
        <Paper sx={{my:2,p:2,display:'flex',alignItems:'center'}}>
            <Shield sx={{height:30,width:30,mr:2}} color="primary"/>
            <Box>
                <Typography variant="body1" color="primary">Data Protected</Typography>
                <Typography variant="caption" color="grey">We donnot share your personal data with others</Typography>
            </Box>
        </Paper>
    </Box>
    <Dialog open={log} onClose={e=> setlog(false)} aria-labelledby="Popup Dialog">
      <DialogTitle>
        {diatit}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {diatext}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={e=> router.push('/')} variant="contained" color="primary">
          Okay
        </Button>
      </DialogActions>
    </Dialog>
    </div>
    </>
  )
}

export default UserProfile