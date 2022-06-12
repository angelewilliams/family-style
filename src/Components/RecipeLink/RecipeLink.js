import React, {useState, useEffect} from 'react'
import './RecipeLink.css'
import Collapsible from '../Collapsible/Collapsible'
import Graphic from '../Graphic/Graphic'
import heartOutline from '../../Images/heartOutline.png'
import pinkHeart from '../../Images/F283D3-heart.png'

const RecipeLink = ({ title, link, tag, id, notes, submittedBy, group , addToFavorites, removeFromFavorites}) => {
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
                    <a target="_blank" href={link} className="external-link">{title}</a>
                </div>
                <hr className="recipe-link-divider"/>
                <Collapsible key={id} notes={notes} submittedBy={submittedBy} tag={tag} id={id} className="recipe-description" />
            </div>
        </article>
    )
}


export default RecipeLink

// const [isOpen, setIsOpen] = useState(false)
// const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
// let tagCapitalized = capitalizeFirstLetter(tag)


// return (
//     <div className="collapsible">
//         <button className="toggle" id={id} onClick={() => setIsOpen(!isOpen)}>Notes</button>
//         {isOpen && <div className="notes-content">{notes}</div>}
//         {!isOpen &&
//             <div className="recipe-details-wrapper">
//                 <h4 className="recipe-attribute">{tagCapitalized}</h4>
//                 <h4 className="recipe-attribute">From: {submittedBy}</h4><br/>
//             </div>}
//     </div>
// )
// }