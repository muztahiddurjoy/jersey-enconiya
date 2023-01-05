import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Typography from '@mui/material/Typography'
import {globalCont}  from '../contexts/globalContexts'
import { Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, ButtonGroup } from '@mui/material'
import WishlistCard from '../components/Wishlist/WishListCard'
import {db} from '../firebase'
import {get,child,ref} from 'firebase/database'
import { useRouter } from 'next/router'
const Wishlist = () => {
    const {user} = useContext(globalCont)
    const [wishes, setwishes] = useState([])
    const [open, setopen] = useState(false)
    const router = useRouter()
    useEffect(() => {
      if(user!=null){
        get(child(ref(db),`users/${user.uid}/wishlist`)).then((snap)=>{
          if(snap.exists()){
            setwishes(snap.val())
          }
        })
      }
      else{
        setopen(true)
      }
    }, [])
    const login = ()=>{
      router.push('/login')
    }
    const signup = ()=>{
      router.push('/signup')
    }
  return (
    <div className={styles.topMargin}>
      {open? <Dialog open={open} aria-labelledby="Wishlist create account dialog">
        <DialogTitle>
          Login to continue
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You must need an account to make a wishlist. Please login or create an account to continue
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonGroup variant="contained">
            <Button color="primary" onClick={signup}>Signup</Button>
            <Button color="secondary" onClick={login}>Login</Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog> :
      <>        
        <Typography variant="h5" color="primary">{user && user.displayName}'s Wishlist</Typography>
        <Typography variant="body2" color="grey">You can change your wishlist here</Typography>
        {wishes.length<1 ? <Typography variant="body1" color="grey" align="center">No Items in Wishlist</Typography> :<Grid container sx={{my:3}}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <WishlistCard/>
            </Grid>
        </Grid>}
        </>}
    </div>
  )
}

export default Wishlist