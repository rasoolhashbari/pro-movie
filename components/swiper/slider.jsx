
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SliderComponent from '../sliderComponent';

const Slider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {
        data.map((item) => <SwiperSlide key={item.id}><SliderComponent  data={item} /></SwiperSlide>)
      }
    </Swiper>
  )
}
export default Slider