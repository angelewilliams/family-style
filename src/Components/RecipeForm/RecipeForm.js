import React, { useState } from 'react'
import './RecipeForm.css'


const RecipeForm = ({ submitRecipe }) => {
    const [formData, setFormData] = useState({
        title: '',
        url: '',
        notes: '',
        submittedBy: '',
        group: 'group1',
        tag: ''
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        submitRecipe(formData)
    }

    return (
        <div>
            <p>helloooo</p>
            <section className="form-wrapper">
                <form className="recipe-link-form" onSubmit={handleSubmit}>
                    {submitted ? <div>You have successfully added a recipe</div> : null}
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
                        placeholder='your name'
                        name='submittedBy'
                        value={formData.submittedBy}
                        required
                    />

                    <select value={formData.tag} onChange={handleTagSelect} required>
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
        </div>
    )
}

export default RecipeForm

/*

  const [title, setGroup] = useState('');
    const [url, setUrl] = useState('');
    const [notes, setNotes] = useState('');
    const [submittedBy, setSubmit] = useState('');
    const [tag, setTag] = useState('');
} */