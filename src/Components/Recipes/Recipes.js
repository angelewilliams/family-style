import React from 'react'
import './Recipes.css'
import RecipeLink from './../RecipeLink/RecipeLink'

const Recipes = ({recipeProps}) => {
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
            />

        )
    })
    return (
        <div className='recipes-wrapper'>
            {recipeProps.length ? recipesToShow : <p>'error loading'</p>}
        </div>
    )
}

export default Recipes