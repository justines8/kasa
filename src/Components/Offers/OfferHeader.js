import React from "react";

const OfferHeader = ({ offer }) => {
    return (
        <div>
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <p>{offer.rating}</p>
            <p>{offer.location}</p>
            <p>{offer.tags.join(", ")}</p>
        </div>
    );
}

export default OfferHeader;