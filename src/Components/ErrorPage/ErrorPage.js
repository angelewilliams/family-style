import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'


const ErrorPage = ({context, handleFetch}) => {
    if(context == 'favorites'){
        return( <div>
            <h3>Looks like you haven't favorited any recipes yet!</h3>
            <div className="errorLink"><NavLink className="return-group1" to="/group1" onClick={handleFetch}> Browse Recipes</NavLink> to see if you want to save any!</div>
        </div>
        )
    }



    return (
        <div>
            <h2>Hmm... something is not quite right</h2>
            <h3>{context}</h3>
            <div className="errorLink">Please <NavLink to="/" > Return Home</NavLink> and try again later.</div>
        </div>
    )
}
export default ErrorPage