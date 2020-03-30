import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row align-items-center header-hero">
                    <div className="col text-center">
                        <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
                            amazing recipes
                        </h1>
                        <Link to="recipes" className="text-uppercase bt btn-secondary btn-lg mt-3 nounderline">search recipes</Link>
                    </div>
                </div>
            </div>
        )
    }
}
