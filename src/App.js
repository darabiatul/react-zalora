import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Zalora from './components/Zalora';
import './App.css';

import Navbar from './components/Navbar';
import slider from './components/slider';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/" component={Zalora} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
