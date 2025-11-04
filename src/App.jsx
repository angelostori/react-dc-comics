import dcLogo from './assets/img/dc-logo.png'

function App() {

  return (
    <>
      <header>

        <nav class="nav justify-content-around">
          <img className='logo' width={60} src={dcLogo} alt="" />

          <a class="nav-link" href="#">CHARACTERS</a>
          <a class="nav-link" href="#">COMICS</a>
          <a class="nav-link" href="#">MOVIES</a>
          <a class="nav-link" href="#">TV</a>
          <a class="nav-link" href="#">GAMES</a>
          <a class="nav-link" href="#">COLLECTIBLES</a>
          <a class="nav-link" href="#">VIDEOS</a>
          <a class="nav-link" href="#">FANS</a>
          <a class="nav-link" href="#">NEWS</a>
          <a class="nav-link" href="#">SHOP</a>
        </nav>

      </header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App
