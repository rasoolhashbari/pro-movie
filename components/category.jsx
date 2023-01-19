
 const Category= (props)=>{
    
  console.log(props.data);
    return(
        <>
        <div><img className="w-100" src={props.data.image} alt="" /></div>
        </>
    )
}

export default Category