import { comics } from "../../../public/comics.js";

export default function Main() {

    return (
        <main>
            <section className="jumbotron">
                <button type="button" className="btn btn-primary">CURRENT SERIES</button>
            </section>
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

                    <button type="button" className="btn btn-primary">LOAD MORE</button>

                </div>
            </section>
        </main>
    )
}