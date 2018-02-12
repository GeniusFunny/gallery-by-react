import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Title"
          iconClassNameRight="mudiocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default App;
