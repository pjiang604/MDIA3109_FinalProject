import { useState, useEffect } from "react"; 
import axios from "axios";

export default function PublicArt({type}: PublicArtProps) {
  
  const [data, setData] = useState<PublicArtImage[]>([]);

  const url = "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-art/records?limit=20"

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      console.log("response.data", response.data.results)
      setData(response.data.results);
    }

    getData()

    .catch(console.error);
  },[])

  return (
    <>
    </>
  )
}