import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { axiosInstance } from "../../libs/axiosInstance"


const Products = ({ product }) => {
    const [produc, setProduct] = useState(null)
    const router = useRouter()

    return (
        <>
            <h1>{product?.title}</h1>
        </>
    )
}
export default Products

export const getServerSideProps = async ({ params }) => {
    let product = await axiosInstance.get(`products/${params.slug}`)
    return {
        props: { product: product.data.result }
    }
}