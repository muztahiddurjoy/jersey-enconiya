import { Box } from '@mui/system'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Button, Divider } from '@mui/material'
import { Facebook, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import {createUserWithEmailAndPassword,onAuthStateChanged,updateProfile} from 'firebase/auth'
import {auth,db} from '../firebase'
import {set,ref} from 'firebase/database'
import { useRouter } from 'next/router'
import {globalCont} from '../contexts/globalContexts'
const signup = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [visible, setvisible] = useState(false)
    const router = useRouter()
    const {setuser} = useContext(globalCont)
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            if(user!=null){
                router.push('/')
            }
        })
    }, [])
    

    const createAccount = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then((result)=>{
            updateProfile(result.user,{
                displayName: name
            }).then(()=>{
                set(ref(db,`/users/${result.user.uid}`),{
                    fullName:name,
                    email,
                    joined:new Date().toLocaleDateString()
                })
                setuser(result.user)
                router.push(`/user/${result.user.uid}`)
            })
        })
    }
  return (
    <>
    <Head>
        <title>Sign Up</title>
    </Head>
    <div className={style.topMargin}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{width:'100%'}}>
            <Typography variant="h6" color="secondary" style={{width:'300px'}} align="left">Sign Up</Typography>
            <TextField
              label="Full Name"
              value={name}
              onChange={e=> setname(e.target.value)}
              style={{width:'300px',marginTop:7}}
              variant="outlined"
            />
            <TextField
              label="E-mail"
              value={email}
              onChange={e=> setemail(e.target.value)}
              type="email"
              style={{width:'300px',marginTop:7}}
              variant="outlined"
            />
           <FormControl 
             style={{width:'300px',marginTop:8}}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                 value={password}
                 onChange={e=> setpassword(e.target.value)}
                 type={visible ? 'text':'password'}
                 label="Password"
                 endAdornment={
                    <InputAdornment position='end'>
                        <IconButton edge="end"
                            onClick={e=> setvisible(!visible)}>
                                {visible ? <VisibilityOff/>: <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                 }/>
           </FormControl>
           <Button variant="contained" color="primary" style={{width:'300px',marginTop:7}} onClick={createAccount}>
             Create Account
           </Button>
           <Divider sx={{my:3}}>
                 <Typography variant="body1" color="secondary">Or</Typography>
           </Divider>
           <Button variant="contained" color="secondary" startIcon={<Google/>} style={{marginTop:7,width:'300px'}}>
             Continue With Google
           </Button>
           
           <Button variant="contained" color="blue" startIcon={<Facebook/>} style={{marginTop:7,width:'300px'}}>
             Continue With Facebook
           </Button>
        </Box>
    </div>
    </>
  )
}

export default signup