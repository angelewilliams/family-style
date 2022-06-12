import React from 'react'
import {  useLocation } from 'react-router-dom'
import awesomeTurtle from './../../Images/awesome-turtle.png';
import './NoMatch.css'

const NoMatch = () => {
    let location = useLocation();
  
    return (
      <div className="no-match">
        <h3>
          Uh oh, looks like Angele did not code anything for <code>{location.pathname} </code> yet.
        </h3>
        <h4>But here's an awesome turtle her sister drew:</h4>
        <img src={awesomeTurtle} alt="awesome turtle" className="awesome-turtle"/>
      </div>
    );
  }
  
  export default NoMatch