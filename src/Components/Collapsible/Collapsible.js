import React, { useState } from 'react'
import './Collapsible.css'

const Collapsible = ({ notes, submittedBy, tag, id}) => {
    const [isOpen, setIsOpen] = useState(false)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    let tagCapitalized = capitalizeFirstLetter(tag)


    return (
        <div className="collapsible">
            <button className="toggle" id={id} onClick={() => setIsOpen(!isOpen)}>Notes</button>
            {isOpen && <div className="notes-content">{notes}</div>}
            {!isOpen &&
                <div className="recipe-details-wrapper">
                    <h4 className="recipe-attribute">{tagCapitalized}</h4>
                    <h4 className="recipe-attribute">From: {submittedBy}</h4><br/>
                </div>}
        </div>
    )
}

export default Collapsible