import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styling/single_page.css';

const SingleCocktail = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log('this is data', data);
      setData(data);
    };

    fetchData();
  }, [id]);

  return data ? (
    <main>
      <div className="main_container">
        <ul className="main_ul">
          {data.drinks.map((i, idx) => (
            <li className="main_li" key={idx}>
              <div className="div_image">
                <img className="img" src={i.strDrinkThumb} alt="image drinks" />
              </div>
              <div className="item_div">
                <h3>Name: {i.strDrink}</h3>
                <h3>Category: {i.strCategory}</h3>
                <h3>Info: {i.strAlcoholic}</h3>
                <h3>Glass: {i.strGlass}</h3>
                <h3>Instruction: {i.strInstructions}</h3>
                <h3>
                  Ingredients: {i.strIngredient1}, {i.strIngredient2},{' '}
                  {i.strIngredient1}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  ) : null;
};
export default SingleCocktail;
