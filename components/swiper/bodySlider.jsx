import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BodyComponent from '../BodyComponent';
import { defaultBreakPoint } from '../../libs/constants';

const BodySlider = ({data}) => {
    console.log(data);
    return (
        <>
            {
                data.map((item, i) => {
                    return (
                        <div key={i} className='titleStyle'>
                            <p className={`borderStyle ${i == 0 ? 'border-top-none' : ''}`}>{item.title}</p>
                            <Swiper
                                breakpoints={defaultBreakPoint}
                                modules={[Navigation]}
                                navigation
                                slidesPerView= 'auto'
                                speed={1000}
                                pagination={{ clickable: true }}
                                spaceBetween={10}
                            >
                                {
                                    item.items.map((item) => <SwiperSlide key={item.id}><BodyComponent data={item} /></SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    );
                })
            }
        </>
    )
}

export default BodySlider







// {
               
//     <Swiper
//         breakpoints={defaultBreakPoint}
//         modules={[Navigation]}
//         navigation
//         speed={1000}
//         pagination={{ clickable: true }}
//         spaceBetween={10}
//     >
//         {
//             data.map((person, index) =>
//             (
//                 <div className='rasooooooooooool' key={index}>
//                     <div>
//                     <h1>eeeee</h1>
//                     </div>
//                     {
//                         person.items.map((itemShow, index) => 
//                              (
//                                 <div key={index + person.id}>
//                                     <SwiperSlide>bbbbbbbbb</SwiperSlide>
//                                 </div>
//                             )
//                         )
//                     }
//                 </div>
//             ))
//         }
//     </Swiper>


// }
