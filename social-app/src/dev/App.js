import React, { Component } from 'react';
import { Route,Switch,Link } from "react-router-dom";
import './App.css';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">    
        <Link to="/about">about</Link>
        <Link to="/events">events</Link>
        <Link to="/contribute">contribute</Link>
        <Link to="/contact">contact</Link>
        <Home/>
      </div>
    );
  }
}

export default App;
