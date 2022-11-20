import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './Slider.module.css'
import Image from 'next/image'
const Slider = ({carousel}) => {
  return (
    <Swiper
        slidesPerView={1}
        loop
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay={true}
        pagination={{clickable:true}}
        className={style.carouselImage}
        >
          {Array.isArray(carousel) && carousel.map((v,i)=>{
            return(<SwiperSlide key={i}>
                    <Image src={v} height={482} width={700} alt="Enconiya Jersey Shop"/>
                </SwiperSlide>)
          })}
            
    </Swiper>
  )
}

export default Slider