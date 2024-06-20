import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { fetchData } from '../service';

function RecipeList({ setLoader }) {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [query, setQuery] = useState('pasta');
  const [data, setData] = useState(null);

  const searchRecipe = (searchQuery) => {
    setLoader(true);
    fetchData(searchQuery)
      .then((response) => {
        setData(response);
        setLoader(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoader(false);
      });
  };

  useEffect(() => {
    setLoader(true);
    fetchData(query)
      .then((response) => {
        setData(response);
        setLoader(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoader(false);
      });
  }, [query, setLoader]);

  return (
    <div className='container'>
      <div className='heading-line'>
        <strong>Search Recipes</strong>
        <div className='input-wrapper'>
          <input
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
            type='text'
            placeholder='Search your recipe'
          />
          <button onClick={() => searchRecipe(searchedTerm)}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className='flexbox'>
        {data && data.hits && data.hits.length > 0 ? (
          data.hits.map((item, index) => (
            <div key={index} className='flexItem'>
              <div className='img-wrapper'>
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeList;
