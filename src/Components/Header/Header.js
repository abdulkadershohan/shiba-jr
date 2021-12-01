import React from 'react'
import './Header.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
function Header() {
    return(
        <div id='main'>
            <div className="header-heading">
                <h3>Welcome To </h3>
                <h1><span>SHIBA </span>JUNIOR <br/>(ShibJr)</h1>
                <div className="details">
                    <p>SHIBA JUNIOR (ShibJr) is a deflationary meme token <br/>with 5% holder rewards and 2% charity fee.<br/> SHIBA JUNIOR´s mission is to support animals in need with food and other important products.
                        <br/>Trade Crypto, hold & earn Token while doing good things – this is Shiba Junior!<br/>
                        Be part of this project and our great community.</p>

                </div>
               <div className="header-btns">
                    <ul>
                        <li>
                            <a href="https://pancakeswap.finance/" className="header-btn">Pancakeswap</a>
                        </li>
                        <li>
                            <a href="https://www.dextools.io/app/bsc/pair-explorer/0xfe305364552e02f20c7e300f50ad18d0c2123316" className="header-btn">Live Chart</a>
                        </li>
                        <li>
                            <a href="https://t.me/shibajuniorofficial" className="header-btn">Telegram</a>
                        </li>
                    </ul>

                </div>
                <div className="contract-address">
                    <h2>Contract Address</h2>
                    <CopyToClipboard text='0xab53e67dbb50a7bcc668acf9171d3ff2e262d423'>
                        <span>0xab53e67dbb50a7bcc668acf9171d3ff2e262d423</span>
                    </CopyToClipboard>
                </div>



            </div>


        </div>
    )
}
export default Header