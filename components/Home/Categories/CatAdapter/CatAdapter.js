import React from 'react'
import style from '../Categories.module.css'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
const CatAdapter = ({img,name,sty,link}) => {
    const gradarr = [style.gradientOne, style.gradientTwo, style.gradientThree, style.gradientFour, style.gradientFive, style.gradientSix, style.gradientSeven, style.gradientEight, style.gradientNine, style.gradientTen, style.gradientEleven, style.gradientTwelve]
  return (
    <Link href={link} style={{textDecoration:'none'}}>
    <div className={`${style.adapter} ${gradarr[sty]}`}>
        <img src={img} alt={name} className={style.leagueIcon}/>
        <Typography variant="body1" color="secondary">{name}</Typography>
    </div>
    </Link>
  )
}

export default CatAdapter