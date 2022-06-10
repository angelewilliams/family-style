import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchRecipes } from './../../apiCalls'
import Recipes from './../Recipes/Recipes'
import Nav from './../Nav/Nav'

// import logo from './../Images/logo.svg';
import './App.css';

const App = () => {
  const [group, setGroup] = useState('williams');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRecipes()
      .then(fetchedRecipes => setRecipes(fetchedRecipes))
      .then(console.log('line18 executed', recipes))
  }, []);


  const addRecipe = () => {
    console.log('add recipe invoked')
  }

  return (
    <main>
      <Nav group={group} addRecipe={addRecipe} />
      <Switch>

        <Route exact path="/williams/" render={()=>{ 
          <Recipes recipeProps={recipes} />}}
        />
         

        <Route
          exact path="/"
          render={() =>
            <>
              <h2>Please select a group's recipes to view</h2>
              <NavLink className="page-title" to="/williams/">
                <h3 className="page-title">Williams</h3>
              </NavLink>
              <p>welcome to the void</p>
            </>
          }
        />

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


OTHER
 <Route
         exact path="/:groupId/submitRecipe"
         render={({match}) => {
           const groupId = match.params.groupId
           return <Recipes id={groupId} />
         }}
       />
*/