import footerLogoImg from '../img/dc-logo-bg.png'

import facebookLogo from '../img/footer-facebook.png'
import twitterLogo from '../img/footer-twitter.png'
import youtubeLogo from '../img/footer-youtube.png'
import pinterestLogo from '../img/footer-pinterest.png'
import periscopeLogo from '../img/footer-periscope.png'

export default function Footer() {

    return (
        <footer>
            <section className="footer-mid">
                <div className="container d-flex justify-content-between">
                    <ul className="nav">
                        <li className="nav-item">
                            <label><strong>DC COMICS</strong></label>
                            <a className="nav-link" href="#">Characters</a>
                            <a className="nav-link" href="#">Comics</a>
                            <a className="nav-link" href="#">Movies</a>
                            <a className="nav-link" href="#">TV</a>
                            <a className="nav-link" href="#">Games</a>
                            <a className="nav-link" href="#">Videos</a>
                            <a className="nav-link" href="#">News</a>
                            <label><strong>SHOP</strong></label>
                            <a className="nav-link" href="#">Shop DC</a>
                            <a className="nav-link" href="#">Shop DC Collectibles</a>
                        </li>

                        <li className="nav-item">
                            <label><strong>DC</strong></label>
                            <a className="nav-link" href="#">Terms Of Use</a>
                            <a className="nav-link" href="#">Privacy policy(New)</a>
                            <a className="nav-link" href="#">Ad Choices</a>
                            <a className="nav-link" href="#">Advertising</a>
                            <a className="nav-link" href="#">Jobs</a>
                            <a className="nav-link" href="#">Subscribtions</a>
                            <a className="nav-link" href="#">Talent Workshops</a>
                            <a className="nav-link" href="#">CPSC Certificates</a>
                            <a className="nav-link" href="#">Ratings</a>
                            <a className="nav-link" href="#">Shop Help</a>
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>

                        <li className="nav-item">
                            <label><strong>SITES</strong></label>
                            <a className="nav-link" href="#">DC</a>
                            <a className="nav-link" href="#">MAD Magazine</a>
                            <a className="nav-link" href="#">DC Kids</a>
                            <a className="nav-link" href="#">DC Universe</a>
                            <a className="nav-link" href="#">DC Power Visa</a>
                        </li>
                    </ul>

                    <img src={footerLogoImg} alt="" />
                </div>
            </section>

            <section className='footer-bottom'>
                <div className="container">
                    <nav className="nav justify-content-between">
                        <button type="button">SIGN UP NOW!</button>
                        <div>
                            <label><strong>FOLLOW US</strong></label>
                            <a className="nav-link" href="#">
                                <img src={facebookLogo} alt="" />
                            </a>
                            <a className="nav-link" href="#">
                                <img src={twitterLogo} alt="" />
                            </a>
                            <a className="nav-link" href="#">
                                <img src={youtubeLogo} alt="" />
                            </a>
                            <a className="nav-link" href="#">
                                <img src={pinterestLogo} alt="" />
                            </a>
                            <a className="nav-link" href="#">
                                <img src={periscopeLogo} alt="" />
                            </a>
                        </div>

                    </nav>
                </div>
            </section>

        </footer>
    )
}