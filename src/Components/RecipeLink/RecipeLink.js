import React, { useState } from 'react'
import './RecipeLink.css'
import Collapsible from '../Collapsible/Collapsible'
import Graphic from '../Graphic/Graphic'
import heartOutline from '../../Images/heartOutline.png'
import pinkHeart from '../../Images/F283D3-heart.png'

const RecipeLink = ({ title, link, tag, id, notes, submittedBy , addToFavorites, removeFromFavorites}) => {
    const [isFavorited, setFavorited] = useState(false)


    let recipeID = `recipe${id}`
    const handleFavoriting = (e) => {
        if(isFavorited){
            setFavorited(false)
            removeFromFavorites(e.target.id)
        } else {
            setFavorited(true)
            addToFavorites(e.target.id)
        }
    }

    return (
        <article className='recipe-link-wrapper' id={id}>
            <Graphic tag={tag} />

            <div className="recipe-wrap">
                <div> 
                    {isFavorited ? <img className="favorite-heart" src={pinkHeart} alt="heart icon to indicate recipe is favorited" onClick={handleFavoriting} id={recipeID}/> 
                        : <img className="favorite-heart" src={heartOutline} alt="heart outline to indicate recipe is not favorited" onClick={handleFavoriting} id={recipeID}/>}
                    <a target="_blank" rel="noreferrer" href={link} className="external-link">{title}</a>
                </div>
                <hr className="recipe-link-divider"/>
                <Collapsible key={id} notes={notes} submittedBy={submittedBy} tag={tag} id={id} className="recipe-description" />
            </div>
        </article>
    )
}


export default RecipeLink