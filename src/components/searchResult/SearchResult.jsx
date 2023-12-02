import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./searchResult.css";

const SearchResult = ({beers}) => {

    const { query } = useParams();

    return (
        <div className="beerCardsContainer">
            {beers?.filter((beer) => (
                beer?.name?.toLowerCase()?.includes(query)))?.map((beer) => (
                    <div key={beer?.id}>
                        <Card beer={beer} />
                    </div>
                ))
            }
        </div>
    );
}

export default SearchResult;