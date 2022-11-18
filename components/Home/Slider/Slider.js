import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import style from './Slider.module.css'
const Slider = () => {
  return (
    <Swiper
        slidesPerView={1}
        className={style.carouselImage}
        >
            <SwiperSlide>
                <img src="/images.jpeg" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images.jpeg" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images.jpeg" width="100%" />
            </SwiperSlide>
    </Swiper>
  )
}

export default Slider