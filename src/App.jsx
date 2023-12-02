import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import SearchBox from "./components/searchBox/SearchBox";
import BeerCards from "./components/beerCards/BeerCards";
import SearchResult from "./components/searchResult/SearchResult";

const App = () => {

  const [beers, setBeers] = useState([]);
  console.log(beers);

  useEffect(() => {
    fetchApiData();
  }, [])

  const fetchApiData = () => {
    fetchDataFromApi().then((res) => {
      setBeers(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Router>
      <SearchBox />
      <Routes>
        <Route path="/" element={<BeerCards beers={beers} />} />
        <Route path="/search/:query" element={<SearchResult beers={beers} />} />
      </Routes>
    </Router>
  );
}

export default App;