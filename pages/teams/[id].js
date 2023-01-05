import React from 'react'
import style from '../../styles/Home.module.css'
import {db} from '../../firebase'
import {get,ref,child} from 'firebase/database'

const gteTeamInfo = (query) =>{
    return get(child(ref(db),`/teams`)).then((snap)=>{
        if(snap.exists()){
            return Object.values(snap.val()).filter((v)=> String(v.link).substring(1,String(v.link).length)===String(query.id))
        }
        else{
            return null
        }
    })
}

export async function getServerSideProps({query}) {
    const data = await gteTeamInfo(query)
    return {
      props: {
        data: data
      },
    }
}
const TeamPage = ({data}) => {
    
  return (
    <div className={style.topMargin}>
        {data[0].name}
    </div>
  )
}

export default TeamPage