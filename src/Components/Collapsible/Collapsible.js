import React, { useState } from 'react'
import './Collapsible.css'

const Collapsible = ({ notes, submittedBy, tag, id}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="collapsible">
            <button className="toggle" id={id} onClick={() => setIsOpen(!isOpen)}>Notes</button>
            {isOpen && <div className="notes-content">{notes}</div>}
            {!isOpen &&
                <div className="recipe-details-wrapper">
                    <h4 className="recipe-description">From: {submittedBy}</h4><br/>
                    <h4 className="recipe-description">{tag}</h4>
                </div>}
        </div>
    )
}

export default Collapsible