import Card from "../card/Card";
import "./beerCards.css";

const BeerCards = ({ beers }) => {

    return (
        <main className="beerCardsContainer">
            {beers?.map((beer) => (
                <div key={beer?.id}>
                    <Card beer={beer} />
                </div>
            ))}
        </main>
    );
}

export default BeerCards;