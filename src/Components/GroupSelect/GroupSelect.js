import React from 'react'
import { NavLink } from 'react-router-dom'
import './GroupSelect.css'

const GroupSelect = ({handleFetch}) =>{

    return(
        <>
        <section className="select-group">
          <h2>Please select a group's recipes to view</h2>
          <NavLink className="group-link" to="/group1/">
            <h3 className="group-link" onClick={handleFetch}>Showcase</h3>
          </NavLink>
        </section>
      </>
    )
}
export default GroupSelect


// <>
// {isLoading ? <LoadingSpinner /> : ''}
// {error && <div className="error">{error}</div>}
// <section className="select-group">
//   <h2>Please select a group's recipes to view</h2>
//   <NavLink className="group-link" to="/group1/">
//     <h3 className="group-link" onClick={handleFetch}>Showcase</h3>
//   </NavLink>
// </section>
// </>