
const SliderComponent = ({data : {title , image}}) => {
    return (
        <div className=" boxTitleSlider">
            <img src={image} alt="There is no photo" />
            <div className='sliderText'><h2 className="h4">{title}</h2></div>
        </div>

    )
}

export default SliderComponent;