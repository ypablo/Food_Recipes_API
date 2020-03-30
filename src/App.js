import React, { Component } from 'react'
import "./App.css"
import Recipes from "./components/Recipes/Recipes"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Default from "./components/Default/Default"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}





export default App;
