import React, { useContext, useEffect, useState } from 'react'
import style from './navbar.module.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Stack } from '@mui/system'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Grid, Typography, IconButton, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'
import {auth} from '../../firebase'
import {onAuthStateChanged,signOut} from 'firebase/auth'
import Link from 'next/link'
import {globalCont} from '../../contexts/globalContexts'
const Navbar = () => {
  const [wish, setwish] = useState(0)
  const [league, setleague] = useState(0)
  const [teams, setteams] = useState(0)
  const [orders, setorders] = useState(0)
  const [profile, setprofile] = useState(0)
  const [sel, setsel] = useState(0)
  const [search, setsearch] = useState('')
  const [log, setlog] = useState(false)
  const {user,setuser,cart,setcart} = useContext(globalCont)
  useEffect(() => {
    console.log(user)
    onAuthStateChanged(auth,(user)=>{
      if(user!=null){
        setuser(user)
      }
    })
  }, [])

  const logout = ()=>{
    signOut(auth).then(()=>{
      setuser(null)
      setlog(true)
    })
  }
  
  return (
    <AppBar position="fixed" color="grey">
         <div className={style.topStyle}>
        <Stack direction="row" justifyContent="center" spacing={5}>
          <Link href="/">
            <Button variant="text" size="small" color={sel==0 ? "primary":"white"}>
              Home
            </Button>
          </Link>
          <Badge badgeContent={cart>0 ? cart : null} color="primary">
            <Button variant="text" size='small' color={sel==1 ? "primary":"white"}>
              Cart
            </Button>
          </Badge>
          {user &&
          <Badge badgeContent={wish>0 ? wish : null} color="primary">
            <Button variant="text" size='small' color={sel==2 ? "primary":"white"}>
              Wishlist
            </Button>
          </Badge>}
          <Badge badgeContent={league>0 ? league : null} color="primary">
            <Button variant="text" size='small' color={sel==3 ? "primary":"white"}>
              Shop by Leagues
            </Button>
          </Badge>
          <Badge badgeContent={teams>0 ? teams : null} color="primary">
            <Button variant="text" size='small' color={sel==4 ? "primary":"white"}>
              Shop by Teams
            </Button>
          </Badge>
          {user && <Link href="/orders">
          <Badge badgeContent={orders>0 ? orders : null} color="primary">
            <Button variant="text" size='small' color={sel==5 ? "primary":"white"}>
              My orders
            </Button>
          </Badge>
          </Link>}
          {user && <Link href={`/user/${user.uid}`}><Badge badgeContent={profile>0 ? profile : null} color="primary">
            <Button variant="text" size='small' color={sel==6 ? "primary":"white"}>
              My Profile
            </Button>
          </Badge></Link>}
          {user && <Button variant="text" color="danger" size="small" onClick={logout}>
            Logout
          </Button>}
        </Stack>
        </div>
      <Toolbar>
        <Grid container>
          <Grid item xs={1} display="flex" justifyContent="start">
            <Stack alignItems="center" direction="row">
              <img src="/logo.png" height="48px"/>
              <Typography variant="h6" className={style.nexa}>Enconiya</Typography>
            </Stack>
          </Grid>
          <Grid item xs={8} display="flex" justifyContent="center" alignItems="center">
            
          </Grid>
          <Grid item xs={3} display="flex" justifyContent="end">
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="text" color="primary">
              Filter Search  
              </Button>
              <IconButton aria-label="" color="primary">
                <Badge badgeContent={cart} color="primary">
                  <ShoppingCartIcon/>
                </Badge>
              </IconButton>
              {user? <Link href={`/user/${user.uid}`}><Avatar src={user.photoURL} alt={user.displayName}/></Link> : <Link href="/login"><Button variant='contained' color="secondary">Login</Button></Link> }
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
      <Dialog open={log} onClose={e=> setlog(false)}>
        <DialogTitle>
          Logged Out
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Logged out successfully. Login Again to access your data
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e=> setlog(false)} variant="contained" color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  )
}

export default Navbar