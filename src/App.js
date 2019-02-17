import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Containers/Search/Search.container';
import CardGrid from './Containers/CardGrid/CardGrid.container';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <CardGrid />
      </div>
    );
  }
}

export default App;
