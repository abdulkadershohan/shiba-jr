import React from 'react'

function Header() {
    return(
        <div id='main'>
            <div className="header-heading">
                <h3>Welcome To </h3>
                <h1><span>SHIBA </span>JUNIOR <br/>(ShibJr)</h1>
                <p>SHIBA JUNIOR (ShibJr) is a deflationary meme token with 5% holder rewards and 2% charity fee. SHIBA JUNIOR´s mission is to support animals in need with food and other important products.
                    <br/>Trade Crypto, hold & earn Token while doing good things – this is Shiba Junior!<br/>
                    Be part of this project and our great community.</p>
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
                <h2>Contract Address</h2>
                <h4>0xab53e67dbb50a7bcc668acf9171d3ff2e262d423</h4>
            </div>


        </div>
    )
}
export default Header