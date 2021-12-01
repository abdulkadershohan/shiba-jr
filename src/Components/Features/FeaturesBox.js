import React from "react";

function FeaturesBox(props) {
    return (
        <div className='features-box'>
            <div className="a-b-img">
                <img src={props.image} alt=""/>
            </div>
            <div className="a-b-text">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>

        </div>
    )

}

export default FeaturesBox