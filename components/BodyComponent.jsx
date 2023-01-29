// import Link from 'next/link';
// import Image from "next/image"

const BodyComponent = (props) => {
    console.log(props)
    return (
        <>
        <img className="w-100" src={props.data.image} alt="" />
        </>
    )
}
export default BodyComponent;
