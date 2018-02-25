import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './components/navbar';
import Items from './components/Items';

const App = () => (
  <MuiThemeProvider>
    <Nav />
    <Items />
  </MuiThemeProvider>
);
export default App;