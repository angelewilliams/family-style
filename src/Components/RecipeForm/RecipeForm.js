import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './RecipeForm.css'
import backArrow from './../../Images/back.png'

const RecipeForm = ({ submitRecipe, handleFetch }) => {
    const [formData, setFormData] = useState({
        title: '',
        url: '',
        notes: '',
        submittedBy: '',
        tag: 'breakfast'
    })
    const [submitted, setSubmitted]= useState(false)

    const [error, setError] = useState('');

    const handleChangeTitle = (e) => {
        setFormData({ ...formData, title: e.target.value })
    }
    const handleChangeURL = (e) => {
        setFormData({ ...formData, url: e.target.value })
    }
    const handleChangeNotes = (e) => {
        setFormData({ ...formData, notes: e.target.value })
    }
    const handleChangeSubmittedBy = (e) => {
        setFormData({ ...formData, submittedBy: e.target.value })
    }

    const handleTagSelect = (e) => {
        setFormData({ ...formData, tag: e.target.value })
    }
    const resetView = () => {
        setTimeout(() => setSubmitted(false)
        , 3000);
      }
      
    const clearForm = () => {
        setFormData({
            title: '',
            url: '',
            notes: '',
            submittedBy: '',
            tag: 'breakfast'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        submitRecipe(formData)
        resetView()  
        clearForm()
        
    }

    return (
        <div className="submit-view">
            <section className="form-wrapper">
                <form className="recipe-link-form" onSubmit={handleSubmit}>
                    {submitted ? <div className="successful-submit">You have successfully added a recipe</div> : null}
                    <input
                        onChange={handleChangeTitle}
                        className="form-title"
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={formData.title}
                        required
                    />

                    <input
                        onChange={handleChangeURL}
                        className="form-url"
                        type='text'
                        placeholder='URL to recipe online or google doc'
                        name='url'
                        value={formData.url}
                        required
                    />
                    <input
                        onChange={handleChangeNotes}
                        className="form-notes"
                        type='text'
                        placeholder='Notes about the recipe...'
                        name='notes'
                        value={formData.notes}
                        required
                    />
                    <input
                        onChange={handleChangeSubmittedBy}
                        className="form-submittedBy"
                        type='text'
                        placeholder='Your name'
                        name='submittedBy'
                        value={formData.submittedBy}
                        required
                    />
                    <label for="tags">Please select a tag:</label>
                    <select   className="form-tag" name="tags" value={formData.tag} onChange={handleTagSelect} required>
                        <option value="breakfast">breakfast</option>
                        <option value="drink">drink</option>
                        <option value="dessert">dessert</option>
                        <option value="main">main</option>
                        <option value="salad">salad</option>
                        <option value="sauce">sauce</option>
                        <option value="snack">snack</option>
                    </select>


                    <button type="submit" className="form-submit">SUBMIT</button>
                </form>
                
            </section>

         <Link className="return-to-recipes" to="/group1" onClick={handleFetch}> 
            <img src={backArrow} alt="back arrow icon" className="small-icon"/>
            <h3>Return to Recipes</h3>
         </Link> 
        </div>
    )
}

export default RecipeForm
