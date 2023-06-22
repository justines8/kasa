import Carousel from "../Generics/Carousel.js"
import OfferHeader from "../Offers/OfferHeader.js"
import react, { useState } from "react";

const Offer = ({ offer }) => {
    const [ isDisplayed, setIsDisplayed ] = useState(false);

    const handleClick = () => {
        setIsDisplayed(!isDisplayed);
    }

    return (
        <div>
            <OfferHeader offer={offer} />
            <img src={offer.cover} alt={offer.title} />
            <button onClick={() => handleClick()}>Afficher le carousel</button>
            {isDisplayed && <Carousel images={offer.pictures} />}
        </div>
    );
}

export default Offer;