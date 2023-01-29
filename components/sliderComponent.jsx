
import Image from "next/image"
import Link from "next/link";


const SliderComponent = ({ data }) => {
    return (
        <div className=" boxTitleSlider">
            {/* <Image width={100} height={100} src={data.image} alt="There is no photo" />
            <div className='sliderText'><h2 className="h4">{data.title}</h2></div> */}
            <img src={data.image} alt="" />
            <Link href="">
             
            </Link>

        </div>
    )
}

export default SliderComponent;

