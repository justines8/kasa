const Carousel = ({ images }) => {
    return (
        <div className="carousel">
            {images.map((image, index) => (
                <div key={index}></div>
            ))}
        </div>
    )
}

export default Carousel;