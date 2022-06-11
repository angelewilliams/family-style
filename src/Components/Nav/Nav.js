import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = ({group, addRecipe}) => {

    return (
        <nav>
      
            <NavLink className="page-title" to="/group1/">
                <h1 className="page-title">familystyle</h1>
            </NavLink>
            <div>
            <span className="dot" text={group}> 
                <img src="" alt=""/>
            </span>
            <NavLink className="dot" to="/group1/submitRecipe" activeClassName="selected">
                <img src="" alt=""/>
            </NavLink>
            </div>
        </nav>
    )
}



export default Nav