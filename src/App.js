import React, { Component } from 'react';
import './App.css';
import Nav from './components/navbar';
import Main from './components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Nav />
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default App;
