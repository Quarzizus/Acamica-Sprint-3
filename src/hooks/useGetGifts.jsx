import { useState, useEffect } from "react";

const useGetGifts = ({
  endpoint = "trending",
  limit = 15,
  q = "",
  dependencies = [q],
} = {}) => {
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = `zj3i2QPo9wzpm8gBZdBtGzbH5XQ2YSHW`;
  const URL = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}&limit=${limit}&q=${q}`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setGifts(data.data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { gifts, loading, error };
};

export { useGetGifts };
