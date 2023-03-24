import { useState, useEffect } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiKey = 'k8Y//jwNVrEiV+8XyecTdQ==dbnY7z0CBmyoJMiC';
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        };
        const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
        const response = await fetch(url, options);
        const text = await response.json();
        setData(text[0]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setData, setLoading]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Something went wrong!</div>;

  return (
    <>
      <div>{loading}</div>
      <div>{error}</div>
      <div className="quote">
        Quote :
        {data.quote}
        {' '}
        <br />
        {' '}
        By :
        {' '}
        {data.author}
      </div>
    </>
  );
};

export default Quote;
