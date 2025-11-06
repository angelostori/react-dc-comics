import { comics } from "../../../public/comics.js";
import ComicCard from "./ComicCard.jsx";

export default function Main() {

    return (
        <main>
            <section className="jumbotron">
                <button type="button" className="btn btn-primary">CURRENT SERIES</button>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {comics.map((comic) => (
                            <ComicCard
                                key={comic.id}
                                thumb={comic.thumb}
                                description={comic.description}
                                series={comic.series}
                            />
                        ))}
                    </div>

                    <button type="button" className="btn btn-primary">LOAD MORE</button>

                </div>
            </section>
        </main>
    )
}