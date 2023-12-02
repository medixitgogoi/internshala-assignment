import axios from "axios";

const url = "https://api.punkapi.com/v2/beers";

export const fetchDataFromApi = async () => {
    const {data} = await axios.get(url);
    // console.log(data);
    return data;
}