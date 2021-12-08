import React from 'react';
function HowToBuyBox (props) {
        return (
            <div>
                <div className='how-to-buy-box'>
                    <div className="how-to-buy-box-text">
                        <h2>{props.title}</h2>
                        <p>{props.subtitle}</p>
                    </div>

                </div>
            </div>
        );

}

export default HowToBuyBox;