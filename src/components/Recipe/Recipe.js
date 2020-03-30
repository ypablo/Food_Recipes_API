import React from 'react'
import "./Recipe.css"

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card" style={{ height: "100%" }}>
                        <h1>{title}</h1>
                        <p>Calories: {Math.round(calories)}</p>
                        <img className="image" src={image} alt="" style={{ height: "14rem" }} />
                        <h3>Ingredients: </h3>
                        <ol>
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="text-slanted">{ingredient.text}</li>
                            ))}
                        </ol>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Recipe