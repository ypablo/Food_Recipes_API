import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Default.css"

export default class Default extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div title="404" className="row align-items-center default-hero">
                    <div className="col-lg-12 col-lx-12 col-12 mx-auto col-md-12 text-center">
                        <h2 className="text-light text-slanted text-uppercase">you are in the wrong place</h2>
                        <Link to='/' className="text-uppercase bt btn-secondary btn-lg mt-3 nounderline">
                            return home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}