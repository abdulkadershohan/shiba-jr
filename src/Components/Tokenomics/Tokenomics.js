import React from "react";
import Token from '../../images/Token.svg'
import Supply from '../../images/Supply.svg'
import Holder from '../../images/holder.svg'
import Circulating  from '../../images/Circulating.svg'
import Burned  from '../../images/Burned.svg'
import TokenomicsBox from "./TokenomicsBox";
import './Tokenomics.css'
function Tokenomics() {
    return (
        <div id='tokenomics'>
            <h1>TOKENOMICS</h1>
            <div className="tokenomics-container">
                <TokenomicsBox image={Token} title="Token Symbol" subtitle='SHIBJR'/>
                <TokenomicsBox image={Supply} title="Total Supply " subtitle='100 Quadrillion'/>
                <TokenomicsBox image={Holder} title="Holder " subtitle='465+'/>
                <TokenomicsBox image={Circulating} title="Circulating Supply" subtitle='44 Quadrillion'/>
                <TokenomicsBox image={Burned} title="Burned " subtitle='56 Quadrillion'/>
            </div>

        </div>
    )

}

export default Tokenomics