
const fetchRecipes = () => {
   return fetch('https://family-style-api-aw.herokuapp.com/api/v1/recipes')
        .then(response => response.json())

}

const postRecipe = (title, url, notes, submittedBy, group, tag) => {
    return fetch('https://family-style-api-aw.herokuapp.com/api/v1/recipes', {
        method: 'POST',
        body: JSON.stringify({
            "title": title,
            "url": url,
            "notes": notes,
            "submittedBy": submittedBy,
            "group": group,
            "tag": tag,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
}).then(response => {
    if (response.ok) {
        return response.json()
    }
})
}



export { fetchRecipes, postRecipe }
