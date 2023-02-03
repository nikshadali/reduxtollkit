import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setProducts(res.data);
      } catch (err) {
        setError(true);
      }
      setLoading(true);
    };

    fetchData();
  }, [url]);
  return { products, loading, error };
};

export default useFetch;
