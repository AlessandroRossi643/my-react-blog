import React, { Component } from 'react';
import Header from './Header.js';
import Slider from './Slider.js';
import '../css/App.css';

class App extends Component {

  render () {
    return(
      <div className="App">
        <Header/>
        <Slider/>
      </div>
    )
  }
}

export default App;
