import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import Graphic from '../Graphic/Graphic'
import submitRecipe from './../../Images/add-recipe-icon.png'
import person from './../../Images/person-icon.png'
import favorites from './../../Images/favorite-recipes-icon.png'

const Nav = ({group, addRecipe}) => {

    return (
        <nav>
      
            <NavLink className="page-title" to="/">
                <h1 className="page-title">familystyle</h1>
            </NavLink>

            <div className="nav-dot-wrapper">

            <NavLink id="submitRecipe" to="/group1/submitRecipe" activeClassName="selected">
                <img src={submitRecipe} alt="submit recipe plus sign icon" className="dot"/>
            </NavLink>

            <NavLink id="favorites"  to="/group1/favorites" activeClassName="selected">
                <img src={favorites} alt="heart icon to indicate favorited recipes" className="dot"/>
            </NavLink>
            <span  id="group" text={group}> 
                <img src={person} alt="head and shoulders icon to indicate person/group logged in as" className="dot"/>

            </span>

           
            </div>
        </nav>
    )
}



export default Nav