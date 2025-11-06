export default function ComicCard({ thumb, description, series }) {


    return (
        <div className="col-2">
            <div className="card">
                <img src={thumb} className="card-img-top" alt={description} />
                <div className="card-body">
                    <p className="card-title">{series}</p>
                </div>
            </div>
        </div>
    )
}