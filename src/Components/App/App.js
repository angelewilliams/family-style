import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchRecipes, postRecipe } from './../../apiCalls'
import Recipes from './../Recipes/Recipes'
import LoadingSpinner from '../Loading/LoadingSpinner';
import Nav from './../Nav/Nav'
import NoMatch from '../NoMatch/NoMatch';
import RecipeForm from '../RecipeForm/RecipeForm'
import ErrorPage from '../ErrorPage/ErrorPage';
// import logo from './../Images/logo.svg';
import './App.css';
import GroupSelect from '../GroupSelect/GroupSelect';



const App = () => {

  
  const [group, setGroup] = useState('group1');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [favoritedRecipes, setFavorites] = useState([])
  
  const [error, setError] = useState('');



  // useEffect(() => {
  //   const localData = localStorage.getItem('favRecipes') 
  //     if(localData) {
  //       setFavorites(JSON.parse(localData))}
  // }, []);

 

  const addToFavorites = (recipeID) => {
    let recipeInt = parseInt(recipeID.slice(6))
    let recipeToAdd = recipes.find((recipe) => recipeInt === recipe.id )
      if(!favoritedRecipes.includes(recipeToAdd)){
         setFavorites([...favoritedRecipes, recipeToAdd])
          // localStorage.setItem('favRecipes', JSON.stringify(favoritedRecipes))

      }
  }
  const removeFromFavorites= (recipeID) => {
    let recipeInt = parseInt(recipeID.slice(6))
    let newFavs = favoritedRecipes.filter((recipe) => recipeInt !== recipe.id )
    setFavorites(newFavs)
    // localStorage.setItem('favRecipes', JSON.stringify(newFavs))

  }

  
  // const storeFavorites = () => {
  //   localStorage.setItem('favRecipes', JSON.stringify(favoritedRecipes))
  //   const localData = localStorage.getItem('favRecipes') 
  //   setFavorites({localData ? JSON.parse(localData) : []})
  // }


  const handleFetch = () => {
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
          {isLoading ? <LoadingSpinner /> : <Recipes recipeProps={recipes} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}
        </Route>

        <Route exact path="/group1/submitRecipe"
          render={() =>
            <RecipeForm submitRecipe={submitRecipe} handleFetch={handleFetch} />
          }
        />
        <Route exact path="/group1/favorites" 
          render={() => 
            <>
            {isLoading ? <LoadingSpinner /> : <Recipes recipeProps={favoritedRecipes} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}
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

//CODE HOARDING AREA
// <Route exact path="/">
//   {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
// </Route>

// <NavLink to="/about">About</NavLink>
// <NavLink to="/favorites">Favorites</NavLink>
// <NavLink to="/recipeLinks">Recipes</NavLink>

/* <Route exact path="/">
<LandingPage />
</Route>

postRecipe(value.title, value.url, value.notes, value.submittedBy, value.group, value.tag)
      .then(response => console.log(response))

      .catch(() => {
        setError("Unable to fetch recipes at this time");
        setIsLoading(false);
      });
OTHER
       .then(fetchedRecipes => {
        console.log('line 47 executed' , fetchedRecipes)
        setRecipes(fetchedRecipes.recipes)
        setIsLoading(false)
      })

*/