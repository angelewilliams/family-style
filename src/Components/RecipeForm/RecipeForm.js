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
    const [submitted, setSubmitted]= useState(true)

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
        setTimeout(() => clearForm(), 3000);
      }
      
    const clearForm = () => {
        setFormData({
            title: '',
            url: '',
            notes: '',
            submittedBy: '',
            tag: 'breakfast'
        })
        setSubmitted(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        submitRecipe(formData)
        resetView()  
    }

    return (
        <div className="submit-view">
            <section className="form-wrapper">
                <form className="recipe-link-form" onSubmit={handleSubmit}>
                    {submitted ? <div className="successful-submit">You have successfully added a recipe</div> : null}
                    <input
                        onChange={handleChangeTitle}
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={formData.title}
                        required
                    />

                    <input
                        onChange={handleChangeURL}
                        type='text'
                        placeholder='URL to recipe online or google doc'
                        name='url'
                        value={formData.url}
                        required
                    />
                    <input
                        onChange={handleChangeNotes}
                        type='text'
                        placeholder='Notes about the recipe...'
                        name='notes'
                        value={formData.notes}
                        required
                    />
                    <input
                        onChange={handleChangeSubmittedBy}
                        type='text'
                        placeholder='Your name'
                        name='submittedBy'
                        value={formData.submittedBy}
                        required
                    />
                    <label for="tags">Please select a tag:</label>
                    <select name="tags" value={formData.tag} onChange={handleTagSelect} required>
                        <option value="breakfast">breakfast</option>
                        <option value="drink">drink</option>
                        <option value="dessert">dessert</option>
                        <option value="main">main</option>
                        <option value="salad">salad</option>
                        <option value="sauce">sauce</option>
                        <option value="snack">snack</option>
                    </select>


                    <button type="submit">SUBMIT</button>
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