import footerLogoImg from '../img/dc-logo-bg.png'

import facebookLogo from '../img/footer-facebook.png'
import twitterLogo from '../img/footer-twitter.png'
import youtubeLogo from '../img/footer-youtube.png'
import pinterestLogo from '../img/footer-pinterest.png'
import periscopeLogo from '../img/footer-periscope.png'

import footerLinks from '../../../public/footer-links'

export default function Footer() {

    return (
        <footer>
            <section className="footer-mid">
                <div className="container d-flex justify-content-between">
                    <ul className="nav">
                        {footerLinks.map((section) => (
                            <li className="nav-item" key={section.id}>
                                <label><strong>{section.title}</strong></label>
                                {section.links.map((link, index) => (
                                    <a className="nav-link" href={link.href} key={index}>
                                        {link.text}
                                    </a>
                                ))}
                            </li>
                        ))}
                    </ul>

                    <img src={footerLogoImg} alt="DC Logo" />
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