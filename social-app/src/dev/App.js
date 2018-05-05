import React, { Component } from 'react';
import { Route,Switch} from "react-router-dom";

import './App.css';
import Home from './containers/home.container';
import About from './components/about/about';
class App extends Component {
  render() {
    return (
      <div>    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>  
      </div>
    );
  }
}

export default App;
