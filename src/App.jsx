import Header from './assets/components/header'
import Main from './assets/components/Main'
import digitalComicsImg from './assets/img/buy-comics-digital-comics.png'
import merchandiseImg from './assets/img/buy-comics-merchandise.png'
import shopLocatorImg from './assets/img/buy-comics-shop-locator.png'
import subscriptionsImg from './assets/img/buy-comics-subscriptions.png'
import dcPowerVisaImg from './assets/img/buy-dc-power-visa.svg'

import footerLogoImg from './assets/img/dc-logo-bg.png'
function App() {

  return (
    <>
      <Header />
      <Main />
      <footer>
        <section class='footer-top' >
          <div class="container">
            <ul class="nav justify-content-around align-items-center">
              <li class="nav-item">
                <img src={digitalComicsImg} alt="" />
                <a class="nav-link" href="#">DIGITAL COMICS</a>
              </li>
              <li class="nav-item">
                <img src={merchandiseImg} alt="" />
                <a class="nav-link" href="#">DC MERCHANDISE</a>
              </li>
              <li class="nav-item">
                <img src={shopLocatorImg} alt="" />
                <a class="nav-link" href="#">COMIC SHOP LOCATOR</a>
              </li>
              <li class="nav-item">
                <img src={subscriptionsImg} alt="" />
                <a class="nav-link" href="#">SUBSCRIPTION</a>
              </li>
              <li class="nav-item">
                <img src={dcPowerVisaImg} alt="" />
                <a class="nav-link" href="#">DC POWER VISA</a>
              </li>
            </ul>
          </div>

        </section>

        <section className="footer-mid">
          <div className="container d-flex justify-content-between">
            <ul class="nav">
              <li class="nav-item">
                <label><strong>DC COMICS</strong></label>
                <a class="nav-link" href="#">Characters</a>
                <a class="nav-link" href="#">Comics</a>
                <a class="nav-link" href="#">Movies</a>
                <a class="nav-link" href="#">TV</a>
                <a class="nav-link" href="#">Games</a>
                <a class="nav-link" href="#">Videos</a>
                <a class="nav-link" href="#">News</a>
                <label><strong>SHOP</strong></label>
                <a class="nav-link" href="#">Shop DC</a>
                <a class="nav-link" href="#">Shop DC Collectibles</a>
              </li>

              <li class="nav-item">
                <label><strong>DC</strong></label>
                <a class="nav-link" href="#">Terms Of Use</a>
                <a class="nav-link" href="#">Privacy policy(New)</a>
                <a class="nav-link" href="#">Ad Choices</a>
                <a class="nav-link" href="#">Advertising</a>
                <a class="nav-link" href="#">Jobs</a>
                <a class="nav-link" href="#">Subscribtions</a>
                <a class="nav-link" href="#">Talent Workshops</a>
                <a class="nav-link" href="#">CPSC Certificates</a>
                <a class="nav-link" href="#">Ratings</a>
                <a class="nav-link" href="#">Shop Help</a>
                <a class="nav-link" href="#">Contact Us</a>
              </li>

              <li class="nav-item">
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
            <nav class="nav justify-content-center  ">
              <a class="nav-link" href="#">Active link</a>
              <a class="nav-link" href="#">Link</a>
              <a class="nav-link" href="#">Disabled link</a>
            </nav>
          </div>
        </section>

      </footer>
    </>
  )
}

export default App
