import React, { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom';


// import logo from './../Images/logo.svg';
import './App.css';

App = () => {
  return (
    <body className="App">
      <header className="App-header">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/recipeLinks">Recipes</NavLink>
        <img src='broken.link' className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/:groupId/recipeLinks">
          <RecipeLinks />
        </Route>
      </Switch>


    </body>


  );
}

export default App;

// <Route exact path="/">
//   {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
// </Route>
