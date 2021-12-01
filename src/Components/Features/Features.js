import React from "react";
import picture1 from '../../images/holder.svg'
import picture2 from '../../images/Charity.svg'
import picture3 from '../../images/Marketing.svg'
import FeaturesBox from "./FeaturesBox";
import './Features.css'
function Features() {
    return (
        <div id='features'>
            <h1>Features</h1>
             <div className="features-container">
                <FeaturesBox image={picture1} title="5% Holder Rewards" subtitle='Reflections: 5% of all buy and sell transactions sent to holders. This means that your amount of Token increase throught just holding them.'/>
                <FeaturesBox image={picture2} title="2% Charity Wallet" subtitle='2% of each transaction goes to our Charity Wallet. We use this Charity Wallet to support animal shelter and animal Chartiy organisations. We proofe the donations to our Community.'/>
                <FeaturesBox image={picture3} title="2% Marketing (later Burn Wallet)" subtitle='2% of each Transaction goes to our Marketing (later Burnwallet)
We use this fee for Marketing, Devlopment etc. Later we use this Account for burnig Tokens.'/>

            </div>

        </div>
    )

}

export default Features