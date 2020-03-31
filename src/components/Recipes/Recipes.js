import React, { useEffect, useState } from 'react'
import './Recipes.css'
import Recipe from "../Recipe/Recipe"

const Recipes = () => {
    const REACT_APP_ID = "6442f2c0"
    const REACT_APP_KEY = "5f7f4d6e0c8d4e97ba27fa244a016b67"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("curry")

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`)
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
        <div className="container-fluid formula">
            <div className="row">
                <div className="col-lg-12 col-lx-12 col-12 mx-auto col-md-12 text-center">
                    <h1 className="text-light text-slanted search-name">Search recipes with <strong className="text-green">Edamam</strong></h1>
                    <p className="text-light text-slanted">type words separated by comma</p>
                    <form onSubmit={getSearch} className="search-form">
                        <input
                            className="search-bar"
                            type="text"
                            value={search}
                            onChange={updateSearch}
                            placeholder="Search..." />
                        <button className="text-uppercase bt btn-secondary btn-lg mt-3 nounderline search-button" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                {recipes.map((recipe, index) => (
                    <Recipe className="col-4 col-lg-6 col-xl-4 mx-auto"
                        key={index}
                        title={recipe.recipe.label}
                        time={recipe.recipe.totalTime}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        allergies={recipe.recipe.healthLabels}
                        ingredients={recipe.recipe.ingredients}
                        source_url={recipe.recipe.url} />
                ))}
            </div>
        </div>



    )
}





export default Recipes;