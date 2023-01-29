import BodySlider from '../components/swiper/bodySlider';
import Slider from '../components/swiper/slider';
import { axiosInstance } from '../libs/axiosInstance';
import { REQUEST_HOME } from '../libs/Requests';

export default function Home({data :{content , vitrine}}) {

  return (
    <div>
      <div className='HederStyle text-end pe-5 py-2'>
        <button type="button" className="btn btn-primary pt-0">ورود</button>
      </div>
      <div className='container '>
        {
          <Slider data={vitrine} />
        }
        {
          <BodySlider data={content} />
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let res = await axiosInstance.get(REQUEST_HOME);
  console.log(55555,res);
  return {
    props: {
      data: res.data
    }
  }
}