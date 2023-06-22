import React from "react";

const Carousel = ({ images }) => {
    return (
        <div className="carousel">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;