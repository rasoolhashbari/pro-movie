import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BodyComponent from '../BodyComponent';
import { defaultBreakPoint } from '../../libs/constants';

const BodySlider = ({ data }) => {
    console.log(data);
    return (
        <>
            {
                <div>
                    <Swiper
                        breakpoints={defaultBreakPoint}
                        modules={[Navigation]}
                        navigation
                        speed={1000}
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                    >
                        {
                            data.map((person, index) => (

                                <div key={index}>
                                        {
                                            person.items.map((itemShow, index) => {
                                                // console.log();
                                                return <SwiperSlide key={index + person.id}><BodyComponent dataItem={itemShow}/></SwiperSlide>
                                            })
                                        }

                                </div>
                            ))

                            // data.map(e=> console.log(e))
                        }
                    </Swiper>
                </div>

            }

        </>
    )
}

export default BodySlider

// var doubledArray = array.map(function (nested) {
//     return nested.map(function (element) {
//         return element * 2;
//     });
// });


