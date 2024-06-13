import React from "react";
import Fibre from "../../images/Services/Fibre.png";
import LTE from "../../images/Services/Lte.png";
import VOIP from "../../images/Services/VoIP.png";

function ImageCarousel() {
    return (
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={Fibre} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={LTE} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={VOIP} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
