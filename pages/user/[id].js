import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import style from '../../styles/Home.module.css'
import {globalCont} from '../../contexts/globalContexts'
import {db,auth} from '../../firebase'
import {ref,child,get} from 'firebase/database'
import { Box } from '@mui/system'

const UserProfile = () => {
    const {query} = useRouter()
    const {user} = useContext(globalCont)
    const [data, setdata] = useState(null)
    
    useEffect(() => {
        if(auth.currentUser!=null){
            get(child(ref(db),`/users/${auth.currentUser.uid}`)).then((res)=>{
                if(res.exists()){
                    setdata(res.val())
                }
            })
        }
        else{
            useRouter().push('/')
        }
    }, [])
    
  return (
    <>
    <Head>
      <title>Enconiya</title>
   </Head>
    <div className={style.topMargin}>UserProfile {query['id']} {data && data.email}</div>
    <Box display="flex">

    </Box>
    </>
  )
}

export default UserProfile