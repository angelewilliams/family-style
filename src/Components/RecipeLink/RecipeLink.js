import React from 'react'
import './RecipeLink.css'

const RecipeLink = ({title}) => {

    return (
        <article className='recipe-link'>
            <h2>{title}</h2>
            <p>hello, this is supposed to be a recipe link</p>
        </article>
    )
}


export default RecipeLink