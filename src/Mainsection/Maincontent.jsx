import React, { useEffect, useState } from "react";
import HeroImage from "../images/hero.jpg";

const Maincontent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.superheroapi.com/api.php/1256666801897095/search/batman");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.results[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="main container">
      <section className="section_left">
        <img src={HeroImage} alt="Hero" />
      </section>
      <section className="section_right">
        <ul className="hero_characters flex">
          <li>
            <p>Powerstats</p>
          </li>
          <li>
            <p>Biography</p>
          </li>
          <li>
            <p>App</p>
          </li>
          <li>
            <p>Connections</p>
          </li>
        </ul>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div className="biography">
            <p className="subtitle">Full Name</p>
            <p>{data.biography["full-name"]}</p>
            <p className="subtitle">Alter-egos</p>
            <p>{data.biography["alter-egos"]}</p>
            <p className="subtitle">Aliases</p>
            <p>{data.biography.aliases.join(", ")}</p>
            <p className="subtitle">Place of birth</p>
            <p>{data.biography["place-of-birth"]}</p>
            <p className="subtitle">First Appearance</p>
            <p>{data.biography["first-appearance"]}</p>
            <p className="subtitle">Publisher</p>
            <p>{data.biography.publisher}</p>
            <p className="subtitle">Alignment</p>
            <p>{data.biography.alignment}</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Maincontent;
