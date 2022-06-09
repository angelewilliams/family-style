import React, { useState, useEffect } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom';
import { fetchRecipes } from './../../apiCalls'
import Recipes from './../Recipes/Recipes'

// import logo from './../Images/logo.svg';
import './App.css';

const App = () => {
  const [group, setGroup] = useState('williams');
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetchRecipes()
    .then(recipes => console.log(recipes))
    .then(console.log('something may have worked'))
  }, []);

  return (
    <body className="App">
      <header className="App-header">
      
        <img src='broken.link' className="App-logo" alt="logo" />
      </header>
      <Switch>

        <Route exact path="/:groupId/recipeLinks">
          <Recipes recipesProps='williams'/>
        </Route>
      </Switch>


    </body>


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

{/* <Route exact path="/">
<LandingPage />
</Route> */}