import React from 'react';
import './HowToBuy.css'
import Carousel from 'react-elastic-carousel'
function HowToBuy(){
        return (
            <div >
                <Carousel >
                    <div className='card'>
                        <h1>STEP 1</h1>
                        <p>ShibJr token is available on the Binance Smart Chain. You can use MetaMask as a third party browser wallet. Visit <a href='https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=988093538662584512&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D' target='_blank'>iPhone</a>  or <a href='https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&ref=producthunt&_branch_match_id=988093538662584512&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWT6ooz3a1yHeztAQA%2FOIqTSQAAAA%3D' target='_blank'>Android</a>.</p>
                    </div>
                    <div className='card'>
                        <h1>STEP 2</h1>
                        <p>Send BNB to your MetaMask Wallet You have to send BNB to your MetaMask Wallet. You can use (Binance, Coinbase and more Exchanges) to buy BNB and transfer them to your Metamask Wallet. Send the Token to your Metamask Wallet ID.</p>
                    </div>
                    <div className='card'>
                        <h1>STEP 3</h1>
                    <p>Go to Pancakeswap You can currently swap BNB tokens for ShibJr on Pancakeswap decentralized exchange! Use 11% Slippage for your transaction.</p>
                    </div>
                    <div className='card'>
                        <h1>STEP 4</h1>
                    <p>Import your Shiba Junior Token to your Metamask Wallet Go to Metamask -> Import tokens -> Fill in Token Adress (0xAb53E67DbB50A7Bcc668aCf9171D3ff2e262D423)</p>
                    </div>


                </Carousel>

            </div>
        );

}

export default HowToBuy;
/*
                    Card step='step-1'/>
                   <Card step='step-2'/>
                   <Card step='step-3'/>
                   <Card step='step-4'/>
* */