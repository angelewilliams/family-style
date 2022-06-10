import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = ({group, addRecipe}) => {

    return (
        <nav>
      
            <NavLink className="page-title" to="/:groupId/">
                <h1 className="page-title">familystyle</h1>
            </NavLink>
            <div>
            <span className="dot" text={group}> 
                <img src="" alt=""/>
            </span>
            <NavLink className="dot" to="/:groupId/submitRecipe" activeClassName="selected">
                <img src="" alt=""/>
            </NavLink>
            </div>
        </nav>
    )
}



export default Nav