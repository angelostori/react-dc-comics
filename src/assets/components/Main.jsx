import { comics } from "../../../public/comics.js";

export default function Main() {

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
        </main>
    )
}