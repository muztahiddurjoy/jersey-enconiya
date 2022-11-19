import { Box } from '@mui/system'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Facebook, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import {auth} from '../firebase'
import {signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {globalCont} from '../contexts/globalContexts'
import { useRouter } from 'next/router'
const login = () => {
  const router = useRouter()
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [emailerr, setemailerr] = useState(false)
  const [passerr, setpasserr] = useState(false)
  const [emailerrtext, setemailerrtext] = useState('')
  const [passerrtext, setpasserrtext] = useState('')
  const [passvis, setpassvis] = useState(false)

  const {user,setuser} = useContext(globalCont)

  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user!=null){
        router.push('/')
      }
    })
  }, [])
  
  const login = ()=>{
    if(email.length<7){
      setemailerr(true)
      setemailerrtext("Please Enter a valid email address")
    }
    else if(!email.includes('@')){
      setemailerr(true)
      setemailerrtext("Please Enter a valid email address")
    }
    else if(pass.length<6){
      setpasserr(true)
      setpasserrtext("Password must contain more than 6 characters")
    }
    else{
      signInWithEmailAndPassword(auth,email,pass).then((user)=>{
        setuser(user)
      })
    }
  }
  return (
    <>
    <Head>
      <title>Login</title>
   </Head>
    <main className={style.topMargin}>
      <Box 
        sx={{w:'100%',h:'100vh'}} 
        display="flex"
        alignItems="center"
        justifyContent="center">
          <Box>
            <Typography variant="h6" color="secondary">Login</Typography>
            <TextField
              label="E-mail"
              value={email}
              onChange={e=> setemail(e.target.value)}
              variant="outlined"
              fullWidth
              error={emailerr}
              helperText={emailerrtext}
              type="email"
              style={{width:'300px',marginTop:5}}
            />
            <br/>
            <FormControl 
                style={{width:'300px',marginTop:8}}>
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                value={pass}
                label="Password"
                onChange={e=> setpass(e.target.value)}
                variant="outlined"
                fullWidth
                error={passerr}
                helperText={passerrtext}
                type={passvis? 'text':'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end"
                    onClick={e=> setpassvis(!passvis)}>
                      {!passvis? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                }
                
              />
            </FormControl>
            <Link href="/forgot-password" style={{textDecoration:'none'}}>
              <Typography variant="body2" color="secondary" style={{width:'300px'}} align="right">Forgot Password</Typography>
            </Link>
            <Button variant="contained" color="primary" style={{width:'300px',marginTop:10}} onClick={login}>
              Login
            </Button>
            <Divider sx={{my:2}}>
              <Typography variant="body2" color="secondary">Or</Typography>
            </Divider>
            <Button variant="contained" color="secondary" style={{width:'300px'}} startIcon={<Google/>}>
              Continue with Google
            </Button><br/>
            <Button variant="contained" color="blue" style={{width:'300px',marginTop:7,color:'white'}} startIcon={<Facebook/>}>
              Continue with Facebook
            </Button>
            <Divider sx={{my:2}}>
                <Typography variant="body2" color="secondary">Don't have an account?</Typography>
            </Divider>
            <Link href="/signup">
              <Button variant="outlined" color="secondary" style={{width:'300px'}}>
                Create Account
              </Button>
            </Link>
          </Box>
      </Box>
    </main>
    </>
  )
}

export default login