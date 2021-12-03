import React from 'react';
import './Footer.css'
import { FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';


function Footer () {
        return (
            <div id='footer'>
              <div className="footer-top-section">
                  <h4>Shiba Junior</h4>
                  <p>info@shibajuniortoken.com</p>
                  <h5><FiTwitter/><a className='footer-link' href='https://twitter.com/shiba_junior' target='_blank'>Twitter</a> </h5>
                  <h5><FaTelegramPlane/><a className='footer-link' href='https://t.me/shibajuniorofficial' target='_blank'>Telegram</a></h5>

              </div>
                <div className="footer-bottom-section">
                    <ul>
                        <li><p>Copyright © 2021 ShibJr - Shiba Junior | Powered by shibjr.com</p></li>
                        <li><p><a href='https://abdulkadershohan.netlify.app/' target='_blank'>Developer contact</a> </p></li>
                    </ul>
                </div>

            </div>
        );

}

export default Footer;