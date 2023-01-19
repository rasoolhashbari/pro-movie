import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BodyComponent from '../BodyComponent';
import { defaultBreakPoint } from '../../libs/constants';
import Category from '../category';

const BodySlider = ({ data }) => {
    return (
        <>
            {
                <div >
                    <h4>دسته بندی</h4>
                    <Swiper
                        breakpoints={defaultBreakPoint}
                        modules={[Navigation]}
                        navigation
                        speed={1000}
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                    >
                        {
                            data.map((item) => <SwiperSlide key={item.id}><BodyComponent data={item} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            }

        </>
    )
}

export default BodySlider



