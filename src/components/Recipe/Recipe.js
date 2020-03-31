import React from 'react'
import "./Recipe.css"

const Recipe = ({ title, calories, image, ingredients, time, source_url }) => {
    return (
        <div className="recipe-list">
            <div className="card text-slanted" style={{ width: 400, height: "100%", padding: "10px", minwidth: "300px" }}>
                <h1 className="card-title">{title}</h1>
                <p className="card-text">Cooking time: {time} min</p>
                <p className="card-text">Calories: {Math.round(calories)}</p>
                <img className="image" src={image} alt="" style={{ height: "14rem", border: "1px solid black" }} />
                <h3 style={{ margin: "10px" }}>Ingredients: </h3>
                <ol className="card-body">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ol>
                <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-capitalize"> more details</a>
            </div >
        </div>
    )
}

export default Recipe