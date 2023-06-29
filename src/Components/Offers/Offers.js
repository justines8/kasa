import React from "react";
import Offer from "../Offers/Offer.js"

const Offers = ({ offers }) => {
    return (
        <div>
            <h1>{offers?.length} offres de logement</h1>
            <div>
                {offers?.map((offer, index) => (
                    <div key={index}>
                        <Offer offer={offer} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offers;