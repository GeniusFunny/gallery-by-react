import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Main';
import Nav from './components/navbar';

// Render the main component into the dom
const navItems = {
  datas: ['首页', '关于', '加入我们'],
  className: 'normal'
};
ReactDOM.render(
  <Nav>{navItems}</Nav>,
  document.getElementById('app')
);
