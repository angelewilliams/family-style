import React from 'react'
import './Graphic.css'
import sauce from './../../Images/recipe-tag-sauce.png'
import dessert from './../../Images/recipe-tag-dessert.png'
import main from './../../Images/recipe-tag-main.png'
import salad from './../../Images/recipe-tag-salad.png'
import drink from './../../Images/recipe-tag-drink.png'
import breakfast from './../../Images/recipe-tag-breakfast.png'
import snack from './../../Images/recipe-tag-snack.png'
import addRecipe from './../../Images/add-recipe-icon.png'
import person from './../../Images/person-icon.png'
import favorites from './../../Images/favorite-recipes-icon.png'


const Graphic = ({tag}) => {
    let altText = `${tag} icon`
    let icon = () => {
        if(tag === 'breakfast'){
            return breakfast
        }
        if(tag === 'dessert'){
            return dessert
        }
        if(tag === 'drink'){
            return drink
        }
        if(tag === 'main'){
            return main
        }
        if(tag === 'salad'){
            return salad
        }
        if(tag === 'sauce'){
            return sauce
        }
        if(tag === 'snack'){
            return snack
        }
        if(tag === 'favorite'){
            return favorites
        }
        if(tag === 'person'){
            return person
        }
        if(tag === 'addRecipe'){
            return addRecipe
        }
    }

    return (
        <img src={icon(tag)} alt={altText} className="recipe-tag-icon"/>
    )
}
export default Graphic