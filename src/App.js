import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Zalora from './components/Zalora';
import './App.css';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Route path="/" component={Content} />
      </React.Fragment>
    );
  }
}

export default App;
