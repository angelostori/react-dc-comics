export default function Main() {
    const nomi = [<li>Mario</li>, <li>Luigi</li>, <li>Lucia</li>]
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
                    <h3>===Content Goes Here===</h3>
                    <ul>
                        {
                            nomi.map((nome) =>
                                <li>{nome}</li>
                            )
                        }
                    </ul>
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