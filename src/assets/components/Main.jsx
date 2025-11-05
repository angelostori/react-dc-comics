import { comics } from "../../../public/comics.js";

export default function Main() {
    const menu = [

        {

            id: 1,

            link: '#',

            text: 'Home',

            is_active: false

        },

        {

            id: 2,

            link: '#',

            text: 'Prodotti',

            is_active: true

        },

        {

            id: 3,

            link: '#',

            text: 'Chi Siamo',

            is_active: false

        },

        {

            id: 4,

            link: '#',

            text: 'Contatti',

            is_active: false

        },

    ]

    return (
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            comics.map((comic) => (
                                <div className="col-2" key={comic.id}>
                                    <div className="card">
                                        <img src={comic.thumb} className="card-img-top" alt={comic.description} />
                                        <div className="card-body">
                                            <p className="card-title">{comic.series}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            <nav className="nav justify-content-center">
                {
                    menu.map(item => (
                        <a key={item.id} className={`nav-link ${item.is_active ? 'current' : ''}`} href={item.link}>{item.text}</a>
                    ))
                }
            </nav>
        </main>
    )
}