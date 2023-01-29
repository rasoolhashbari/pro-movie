
import axios from 'axios';
import { useRouter } from 'next/router'

const ShowCategory = (props) => {
    console.log(props);
    const router = useRouter()
    return (
        <>
            <p>{router.query.title}</p>
            <img src={router.query.img} alt="" />
        </>
    )
}

export default ShowCategory

// export async function getServerSideProps() {
//     let res = await axios.get(`https://demo.laravel-shop.ir/api/v1/${278}`, {
//         headers: { 'x-api-key': "2EZYnn24Jbds739wDYRDbyEQ6KmyGMkXlHyrDcyj" },
//         Accept: 'application/json'
//     });
//     return {
//         props: {
//             data: res
//         }
//     }
// }