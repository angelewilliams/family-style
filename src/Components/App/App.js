import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchRecipes, postRecipe } from './../../apiCalls'
import Recipes from './../Recipes/Recipes'
import LoadingSpinner from '../Loading/LoadingSpinner';
import Nav from './../Nav/Nav'
import NoMatch from '../NoMatch/NoMatch';
import RecipeForm from '../RecipeForm/RecipeForm'
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css';
import GroupSelect from '../GroupSelect/GroupSelect';

const App = () => {
  const [group, setGroup] = useState('group1');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favoritedRecipes, setFavorites] = useState([])
  const [error, setError] = useState('');

  const handleFetch = () => {
    setGroup('group1');
    setIsLoading(true);
    fetchRecipes()
      .then(fetchedRecipes => {
        setRecipes(fetchedRecipes.recipes)
        setIsLoading(false)
      })
      .catch(() => {
        setError("Unable to fetch recipes at this time");
        setIsLoading(false);
      });
  };

  const submitRecipe = ({title, url, notes, submittedBy, tag}) => {
    setIsLoading(true);
     postRecipe(title, url, notes, submittedBy, group, tag)
      .then(fetchRecipes()
      .then(fetchedRecipes => {
        setRecipes(fetchedRecipes)
        setIsLoading(false)
      }))
      .catch(() => {
        setError("Unable to fetch recipes at this time");
        setIsLoading(false);
      })
  }

  const addToFavorites = (recipeID) => {
    let recipeInt = parseInt(recipeID.slice(6))
    let recipeToAdd = recipes.find((recipe) => recipeInt === recipe.id )
      if(!favoritedRecipes.includes(recipeToAdd)){
         setFavorites([...favoritedRecipes, recipeToAdd])
      }
  }
  const removeFromFavorites= (recipeID) => {
    let recipeInt = parseInt(recipeID.slice(6))
    let newFavs = favoritedRecipes.filter((recipe) => recipeInt !== recipe.id )
    setFavorites(newFavs)
  }

  return (
    <main>
      <Nav group={group} handleFetch={handleFetch} />
      
      <Switch>
        <Route
          exact path="/"
          render={() =>
            <GroupSelect handleFetch={handleFetch}/>
          }
        />
        <Route exact path="/group1">
          {isLoading ? <LoadingSpinner /> : <Recipes recipeProps={recipes} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} handleFetch={handleFetch}/>}
        </Route>

        <Route exact path="/group1/submitRecipe"
          render={() =>
            <RecipeForm submitRecipe={submitRecipe} handleFetch={handleFetch} />
          }
        />
        <Route exact path="/group1/favorites" 
          render={() => 
            <>
            {isLoading ? <LoadingSpinner /> : <Recipes recipeProps={favoritedRecipes} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} handleFetch={handleFetch}/>}
            </>
          }
          />

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </main>

  );
}

export default App;