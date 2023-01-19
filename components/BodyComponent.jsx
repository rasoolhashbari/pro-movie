import { useRouter } from 'next/router'
const BodyComponent = (props) => {
    const router = useRouter()

    // console.log(props);


  let Go_Category=(e,id)=>{
    e.preventDefault()
      
   props.data.items.map((item)=>router.push({
    pathname: '/showCategory', item
}))

  }
    return (
        <div className='contentStyle'>

           <a onClick={(e)=>Go_Category(e,props.data)} href=""><img src={props.data.image} alt="" /></a> 
        </div>
    )
}

export default BodyComponent;

// { data: { image } }