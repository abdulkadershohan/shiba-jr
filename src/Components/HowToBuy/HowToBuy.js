import React from 'react';
import './HowToBuy.css'
import Carousel from 'react-elastic-carousel'
import {CopyToClipboard} from "react-copy-to-clipboard";
import {AiOutlineCopy} from "react-icons/ai";
function HowToBuy(){
        return (
            <div id='howToBuy'>
                <h1>HOW TO BUY</h1>
                <Carousel>
                    <div className='how-to-buy-container'>
                        <div className="how-to-buy-box">
                            <ul>
                                <li>
                                    <h2>STEP 1</h2>
                                </li>
                                <li>
                                    <p>ShibJr token is available on the Binance Smart Chain. You can use MetaMask as a third party browser wallet. Visit <a href='https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=988093538662584512&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D' target='_blank'>iPhone</a>  or <a href='https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&ref=producthunt&_branch_match_id=988093538662584512&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWT6ooz3a1yHeztAQA%2FOIqTSQAAAA%3D' target='_blank'>Android</a>.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='how-to-buy-container'>
                        <div className="how-to-buy-box">
                            <ul>
                                <li>
                                    <h2>STEP 2</h2>
                                </li>
                                <li>
                                    <p>Send BNB to your MetaMask Wallet You have to send BNB to your MetaMask Wallet. You can use (Binance, Coinbase and more Exchanges) to buy BNB and transfer them to your Metamask Wallet. Send the Token to your Metamask Wallet ID.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='how-to-buy-container'>
                        <div className="how-to-buy-box">
                            <ul>
                                <li><h2>STEP 3</h2></li>
                                <li><p>Go to Pancakeswap You can currently swap BNB tokens for ShibJr on Pancakeswap decentralized exchange! Use 11% Slippage for your transaction.</p></li>
                            </ul>
                        </div>

                    </div>
                    <div className='how-to-buy-container'>
                        <div className="how-to-buy-box">
                            <ul>
                                <li> <h2>STEP 4</h2></li>
                                <li> <p>Import your Shiba Junior Token to your Metamask Wallet Go to Metamask -> Import tokens -> Fill in Token Adress (0xAb53E67DbB50A7Bcc668aCf9171D3ff2e262D423)</p></li>
                            </ul>
                        </div>

                    </div>

                </Carousel>
                <div className="howToBuy-bottom">
                    <h2>ShibJr Contract:</h2>
                    <CopyToClipboard text='0xab53e67dbb50a7bcc668acf9171d3ff2e262d423'>
                        <span className='contract-address-icon'>0xab53e67dbb50a7bcc668acf9171d3ff2e262d423 <AiOutlineCopy/></span>

                    </CopyToClipboard>
                    <br/>
                    <div className="contract-address">
                        <h2>Buy here -><a href='https://pancakeswap.finance/' target='_blank'>Pancakeswap</a> </h2>
                        <h2>Chart -></h2>
                        <h2><a href='https://poocoin.app/tokens/0xab53e67dbb50a7bcc668acf9171d3ff2e262d423' target='_blank'>Poocoin Chart</a> </h2>
                        <h2><a href='https://www.dextools.io/app/bsc/pair-explorer/0xfe305364552e02f20c7e300f50ad18d0c2123316' target='_blank'>Dextools Chart</a> </h2>

                    </div>

                </div>


            </div>
        );

}

export default HowToBuy;