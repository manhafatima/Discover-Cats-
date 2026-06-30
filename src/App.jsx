import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const API_KEY = import.meta.env.VITE_CAT_API_KEY;

  async function getRandomCat() {
    let found = false;

    while (!found) {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1`,
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );

      const data = await response.json();

      const current = data[0];

      if (!current.breeds.length) continue;

      const breed = current.breeds[0];

      const attributes = [
        breed.name,
        breed.origin,
        breed.temperament,
      ];

      const banned = attributes.some((item) => banList.includes(item));

      if (!banned) {
        found = true;

        setCat(current);
        setHistory((prev) => [current, ...prev]);
      }
    }
  }

  useEffect(() => {
    getRandomCat();
  }, []);

  function toggleBan(item) {
    if (banList.includes(item)) {
      setBanList(banList.filter((i) => i !== item));
    } else {
      setBanList([...banList, item]);
    }
  }

  return (
    <div className="app">
      <h1>🐱 Cat Discovery</h1>

      <button onClick={getRandomCat}>Discover Cat</button>

      {cat && (
        <div className="card">
          <img src={cat.url} alt="cat" />

          <h2
            className="clickable"
            onClick={() => toggleBan(cat.breeds[0].name)}
          >
            {cat.breeds[0].name}
          </h2>

          <p
            className="clickable"
            onClick={() => toggleBan(cat.breeds[0].origin)}
          >
            Origin: {cat.breeds[0].origin}
          </p>

          <p
            className="clickable"
            onClick={() => toggleBan(cat.breeds[0].temperament)}
          >
            Temperament: {cat.breeds[0].temperament}
          </p>
        </div>
      )}

      <div className="history">
        <h2>History</h2>

        {history.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt="history"
            className="history-img"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
