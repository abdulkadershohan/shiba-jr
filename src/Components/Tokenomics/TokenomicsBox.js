import React from "react";
function TokenomicsBox(props) {
    return (
        <div className='tokenomics-box'>
            <div className="tokenomics-box-img">
                <img src={props.image} alt=""/>
            </div>
            <div className="tokenomics-box-text">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>

            </div>

        </div>
    )

}

export default TokenomicsBox