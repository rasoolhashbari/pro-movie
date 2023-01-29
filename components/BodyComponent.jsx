import Link from 'next/link';
import Image from "next/image"

const BodyComponent = (props) => {
    // console.log(props)
    return (
        <div className='contentStyle'>
            {/* <Link href={`products/${data.slug}`}>
                <Image width={120} height={200} src={data.image} alt="There is no photo" />
                <p>{data.title}</p>
            </Link> */}
            {/* <img src={data.image} alt="" /> */}
        </div>
    )
}
export default BodyComponent;
