import dcLogo from '../img/dc-logo.png'

export default function Header() {

    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center">
                <img className="logo" width="60" src={dcLogo} alt="DC Logo" />
                <div className="d-flex gap-3">
                    <div>
                        <a className="nav-link" href="#">CHARACTERS</a>
                    </div>
                    <div>
                        <a className="nav-link active" href="#">COMICS</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">MOVIES</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">TV</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">GAMES</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">COLLECTIBLES</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">VIDEOS</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">FANS</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">NEWS</a>
                    </div>
                    <div>
                        <a className="nav-link" href="#">SHOP</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}