import Header from '../components/header';
import BodySlider from '../components/swiper/bodySlider';
import Slider from '../components/swiper/slider';
import { axiosInstance } from '../libs/axiosInstance';
import { REQUEST_HOME } from '../libs/Requests';


export default function Home({ data: { content, vitrine } }) {

  return (
    <div className=''>

      <div className=''>{<Header />}</div>


      <div>{<Slider data={vitrine} />}</div>
      
      <div className='image-body'>
      <img src='../img/topbody.png' alt="" />
      </div>

      <div className='container-fluid body-style'>{<BodySlider data={content} />}</div>
    </div>
  )
}

export async function getServerSideProps() {
  let res = await axiosInstance.get(REQUEST_HOME);
  return {
    props: {
      data: res.data
    }
  }
}