import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBox.css";

const SearchBox = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const clearSearchQuery = () => {
        setSearchQuery("");
    }

    const goToHomePage = () => {
        navigate('/');
        setSearchQuery("");
    }

    const searchInputHandler = (e) => {
        if (e.key === "Enter" && searchQuery?.length > 0) {
            navigate(`/search/${searchQuery}`);
        }
    }

    return (
        <main className="container">
            <section className="searchBox">
                <span className="homeButton" onClick={goToHomePage}>🏠</span>
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Search for a 🍺 ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={searchInputHandler}
                />
                <span onClick={clearSearchQuery}>X</span>
            </section>
        </main>
    );
}

export default SearchBox;