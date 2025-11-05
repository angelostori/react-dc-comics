import digitalComicsImg from '../img/buy-comics-digital-comics.png'
import merchandiseImg from '../img/buy-comics-merchandise.png'
import shopLocatorImg from '../img/buy-comics-shop-locator.png'
import subscriptionsImg from '../img/buy-comics-subscriptions.png'
import dcPowerVisaImg from '../img/buy-dc-power-visa.svg'

export default function Navbar() {

    return (
        <section className='footer-top' >
            <div className="container">
                <ul className="nav justify-content-around align-items-center">
                    <li className="nav-item">
                        <img src={digitalComicsImg} alt="" />
                        <a className="nav-link" href="#">DIGITAL COMICS</a>
                    </li>
                    <li className="nav-item">
                        <img src={merchandiseImg} alt="" />
                        <a className="nav-link" href="#">DC MERCHANDISE</a>
                    </li>
                    <li className="nav-item">
                        <img src={shopLocatorImg} alt="" />
                        <a className="nav-link" href="#">COMIC SHOP LOCATOR</a>
                    </li>
                    <li className="nav-item">
                        <img src={subscriptionsImg} alt="" />
                        <a className="nav-link" href="#">SUBSCRIPTION</a>
                    </li>
                    <li className="nav-item">
                        <img id="power-visa" src={dcPowerVisaImg} alt="" />
                        <a className="nav-link" href="#">DC POWER VISA</a>
                    </li>
                </ul>
            </div>

        </section>
    )
}

