import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'db4da03a';
  const APP_KEY = '0d9b306f942d7b326982e60df3897bc8';
  const [query, setQuery] = useState('chicken');
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      // console.log(data.hits);
    }
    getRecipes();
  }, [query]);
  // useEffect giống với cmdm, cmdu, có 2 tham số là callback fetch api và tham số thứ 2 là data state cần truyền vào
  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  const getSearch = () => {
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form">
        <input
          onChange={updateSearch}
          className="search-bar"
          type="text"
          value={search} />
        <button className="search-button" type="button" onClick={getSearch}>Search</button>
      </form>
      {/* hết form search */}
      <div className="recipe">
        {recipes.map((recipe, key) => (
          <Recipe
            key={key}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            imgSrc={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
