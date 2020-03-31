import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Default.css"

export default class Default extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div title="404" className="row align-items-center default-hero">
                    <h2 className="text-light text-uppercase">you are in the wrong place</h2>
                    <Link to='/' className="text-uppercase bt btn-secondary btn-lg mt-3 nounderline">
                        return home
                </Link>
                </div>
            </div>
        )
    }
}