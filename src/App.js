import React, { Component } from 'react';
import './App.css';
import Items from './components/Items';
import Nav from './components/navbar';
import Slider from './components/Slider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Nav />
        <Items />
      </MuiThemeProvider>
    )
  }
}

export default App;
