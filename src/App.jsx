import Header from './assets/components/header'
import Main from './assets/components/Main'
import digitalComicsImg from './assets/img/buy-comics-digital-comics.png'
import merchandiseImg from './assets/img/buy-comics-merchandise.png'
import shopLocatorImg from './assets/img/buy-comics-shop-locator.png'
import subscriptionsImg from './assets/img/buy-comics-subscriptions.png'
import dcPowerVisaImg from './assets/img/buy-dc-power-visa.svg'

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


      </footer>
    </>
  )
}

export default App
