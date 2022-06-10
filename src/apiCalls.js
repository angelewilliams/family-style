
const fetchRecipes = () => {
   return fetch('http://localhost:3001/api/v1/recipes')
        .then(response => response.json())

}

const fetchSingleRecipe = (id) => {
    return fetch(`http://localhost:3001/api/v1/recipes/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error ('problem')
            }
        })
}

const postRecipe = (title, url, notes, submittedBy, group, tags) => {
    return fetch('http://localhost:3001/api/v1/recipes', {
        method: 'POST',
        body: JSON.stringify({
            "title": title,
            "url": url,
            "notes": notes,
            "submittedBy": submittedBy,
            "group": group,
            "tags": tags,
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



export { fetchRecipes, fetchSingleRecipe, postRecipe }

// const fetchUsers = () => {
//     return fetch(`http://localhost:3001/api/v1/users`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } 
//     })
// }
//Do I need fetchsingle recipe?