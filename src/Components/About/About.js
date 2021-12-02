import React from "react";
import './About.css'
import aboutImage from '../../images/shiba.webp'
function About() {
    return(
        <div id='about'>
            <div className="about-text">
                <h1>Who is Shiba Junior</h1>
                <p>After experiencing roaring success in the past 12 months, Shiba Inu wanted to build a family to share his success. So, he had a son and he is only a few days old.</p>
                <h3>Meet Shiba Junior:</h3>
                <p>Shiba Junior was born into luxury and wealth. Always highly protected by his family from the wild and unpredictable world outside, he still grew up with the stories from his dad – stories of dedication, hard-work, opportunities and success.<br/>Shiba Junior wanted to experience this by himself. Still young, yet ambitious, he went out to see the world of the other dogs. <br/><br/>Shiba Junior had to experience other dogs unable to afford medical care and even witnessed homeless dogs starving. He became aware of how fortunate he was and wanted to share this.<br/><br/>He founded a charity which provides food and care for dogs in help and for other animals who need it most.<br/><br/>For the future Shiba Junior planned to collaborate with his dad, so they can build further success together.<br/><br/>Follow & support Shiba Junior on his future way.</p>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt=""/>
            </div>


        </div>
    )
}
export  default  About