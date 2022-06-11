import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchRecipes } from './../../apiCalls'
import Recipes from './../Recipes/Recipes'
import LoadingSpinner from '../Loading/LoadingSpinner';
import Nav from './../Nav/Nav'
import NoMatch from '../NoMatch/NoMatch';

// import logo from './../Images/logo.svg';
import './App.css';

const App = () => {
  const [group, setGroup] = useState('group1');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchRecipes()
  //     .then(fetchedRecipes => {
  //       console.log( 'line 18 executed' , fetchedRecipes)
  //       return setRecipes(fetchedRecipes)})
  //     .then(console.log('line 20 executed', recipes))
  // }, []);

  const handleFetch = () => {
    setIsLoading(true);
    fetchRecipes()
      .then(fetchedRecipes => {
        console.log( 'line 18 executed' , fetchedRecipes)
        setRecipes(fetchedRecipes.recipes)
        setIsLoading(false)})
      .catch(() => {
         setError("Unable to fetch recipes at this time");
         setIsLoading(false);
      });
  };

  const addRecipe = () => {
    console.log('add recipe invoked')
  }

  return (
    <main>
      <Nav group={group} addRecipe={addRecipe} />
      <Switch>
        

        <Route exact path="/group1">
          {isLoading ? <LoadingSpinner /> : <Recipes recipeProps={recipes} />}
          
        </Route>
         

        <Route
          exact path="/"
          render={() =>
            <> 
            {isLoading ? <LoadingSpinner /> : ''}
            {error && <div className="error">{error}</div>}
            <section className="select-group">
              <h2>Please select a group's recipes to view</h2>
              <NavLink className="group-link" to="/group1/">
                <h3 className="group-link" onClick={handleFetch}>group1</h3>
              </NavLink>
              </section>
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


OTHER
 <Route
         exact path="/:groupId/submitRecipe"
         render={({match}) => {
           const groupId = match.params.groupId
           return <Recipes id={groupId} />
         }}
       />
*/