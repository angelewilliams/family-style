import React from 'react'
import './RecipeLink.css'
import Collapsible from '../Collapsible/Collapsible'
import Graphic from '../Graphic/Graphic'


const RecipeLink = ({ title, link, tag, id, notes, submittedBy, group }) => {

    //I want the icon to be image that matchest the tag 

    return (
        <article className='recipe-link-wrapper' id={id}>
            <Graphic tag={tag} />

            <div className="recipe-wrap">
                <a target="_blank" href={link}>{title}</a>
                <hr className="recipe-link-divider"/>
                <Collapsible key={id} notes={notes} submittedBy={submittedBy} tag={tag} className="recipe-description" />
            </div>
        </article>
    )
}


export default RecipeLink

