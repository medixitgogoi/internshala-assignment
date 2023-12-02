import "./card.css"

const Card = ({ beer }) => {

    return (
        <main className="cardContainer">
            <div className="imageContainer">
                <section className="image">
                    <img src={beer?.image_url} alt="beer-image" />
                </section>
                <section className="title">
                    <h1>{beer?.name}</h1>
                    <p className="tagline">{beer?.tagline}</p>
                    <h3> <span>Firt Brewed</span> - {beer?.first_brewed}</h3>
                    <h3> <span>Net content</span> - {beer?.volume?.value} {beer?.volume?.unit}</h3>
                    <p className="description">{beer?.description}</p>
                </section>
            </div>
            <div className="ingredients">
                <h2>Key Ingredients</h2>
                <section className="ingredientsBox">
                    <div className="ingredient">
                        <h2>Hops</h2>
                        {beer?.ingredients["hops"]?.map((item, id) => (
                            <p key={id}>{item?.name}</p>
                        ))}
                    </div>
                    <div className="ingredient">
                        <h2>Malt</h2>
                        {beer?.ingredients["malt"]?.map((item, id) => (
                            <p key={id}>{item?.name}</p>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Card;
