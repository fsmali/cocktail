import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../consts';
import axios from 'axios';
import '../styling/homepage.css';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}${search}`);
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return data ? (
    <main className="homeMain">
      <div className="search_div">
        <input
          className="home_input"
          type="text"
          placeholder="Search your drinks"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="home_container">
        <div className="drink_container">
          <ul>
            {data.drinks && data.drinks.length > 0 ? (
              data.drinks.map((i, id) => (
                <li key={id}>
                  <img src={i.strDrinkThumb}></img>
                  <h3>{i.strDrink}</h3>
                  <h4>{i.strGlass}</h4>
                  <p>{i.strAlcoholic}</p>
                  <Link to={`/cocktailbar/${i.idDrink}/`}>
                    {' '}
                    see more detail
                  </Link>
                </li>
              ))
            ) : (
              <li>No cocktail matched with your search</li>
            )}
          </ul>
        </div>

        {loading && <p>Loading...</p>}
      </div>
    </main>
  ) : null;
};

export default Home;
