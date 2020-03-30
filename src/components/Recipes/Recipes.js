import React, { useEffect, useState } from 'react'
import './Recipes.css'
import Recipe from "../Recipe/Recipe"

const Recipes = () => {
    const APP_ID = "6442f2c0"
    const APP_KEY = "5f7f4d6e0c8d4e97ba27fa244a016b67"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("curry")

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="rec">
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch} />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <Recipe
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        allergies={recipe.recipe.healthLabels}
                        ingredients={recipe.recipe.ingredients} />
                ))}
            </div>
        </div>
    )
}





export default Recipes;