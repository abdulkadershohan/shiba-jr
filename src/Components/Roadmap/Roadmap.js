import React from 'react';
import './Roadmap.css'
import Carousel from 'react-elastic-carousel'
function Roadmap(){
    const breakPoints=[
        { width:600, itemsToShow:1 },
        { width:900, itemsToShow:2 },
        { width:1190, itemsToShow:3 }
    ]
    return (
        <div id='roadmap'>
            <h1>SHIBA JUNIOR MOON MAP</h1>
            <Carousel breakPoints={breakPoints}>
                <div className='roadmap-container'>
                    <div className="roadmap-box">
                        <ul>
                            <li>
                                <h2>PHASE 1</h2>
                            </li>
                            <li>
                                <p>☑ Contract Deployment</p>
                            </li>
                            <li>
                                <p>☑ Verify Contract</p>
                            </li>
                            <li>
                                <p>☑ Twitter, Telegram &amp; Insta Channel</p>
                            </li>
                            <li>
                                <p>☑ Launch on Pancakeswap</p>
                            </li>
                            <li>
                                <p>1,000 Token Holder</p>
                            </li>
                            <li>
                                <p>☑ Website launch</p>
                            </li>
                            <li>
                                <p>ShibJr Sticker Set</p>
                            </li>
                            <li>
                                <p>Coinmarket Cap listing</p>
                            </li>
                            <li>
                                <p>Coingecko listing</p>
                            </li>
                            <li>
                                <p>5,000 Telegram Member</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='roadmap-container'>
                    <div className="roadmap-box">
                        <ul>
                            <li>
                                <h2>PHASE 2</h2>
                            </li>
                            <li>
                                <p>First huge Charity Donations</p>
                            </li>
                            <li>
                                <p>Big Marketing Campaign</p>
                            </li>
                            <li>
                                <p>5,000 Token Holder</p>
                            </li>
                            <li>
                                <p>10,000 Telegram Member</p>
                            </li>
                            <li>
                                <p>Outstanding and absolute uniqe NFTs</p>
                            </li>
                            <li>
                                <p>1,000 Telegram Members</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='roadmap-container'>
                    <div className="roadmap-box">
                        <ul>
                            <li>
                                <h2>PHASE 3</h2>
                            </li>
                            <li>
                                <p>Start burning</p>
                            </li>
                            <li>
                                <p>10,000 Holder</p>
                            </li>
                            <li>
                                <p>Own Pet Food Brand</p>
                            </li>
                            <li>
                                <p>Huge Pet Food Donations</p>
                            </li>
                            <li>
                                <p>More uniq NFT Auctions</p>
                            </li>
                            <li>
                                <p>50,000 Telegram Member</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Carousel>
            <div className="gap"></div>



        </div>
    );

}

export default Roadmap;