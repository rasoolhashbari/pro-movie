import { useRouter } from "next/router";

const Category = () => {
    const router = useRouter()
    return (
        <>
            <div><img className="w-100" src={props.data.image} alt="" /></div>
        </>
    )
}

export default Category