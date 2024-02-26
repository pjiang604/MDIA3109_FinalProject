import axios from "axios";

export const getArt = async () => {

    const url = "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-art/records?limit=23"
    try {

        const response = await axios.get(url);
        console.log("response.data", response.data.results)

        return response.data.results
    } catch (error) {
        console.log("getArt hook error", error)
    }

}