import React from 'react'
import './Recipes.css'
import RecipeLink from './../RecipeLink/RecipeLink'
import ErrorPage from '../ErrorPage/ErrorPage'

const Recipes = ({recipeProps, addToFavorites , removeFromFavorites}) => {
    const recipesToShow = recipeProps.map((recipe) => {

        return (
            <RecipeLink
                title={recipe.title}
                link={recipe.url}
                tag={recipe.tag}
                id={recipe.id}
                key={recipe.id}
                notes={recipe.notes}
                submittedBy={recipe.submittedBy}
                group={recipe.group}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
            />

        )
    })
    return (
        <div className='recipes-wrapper'>
            {recipeProps.length ? recipesToShow : <ErrorPage context="favorites"/>}
        </div>
    )
}

export default Recipes