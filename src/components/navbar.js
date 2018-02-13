import React, { Component } from 'react';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import Parent from '../tools/eventProxy'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.transferMsg = this.transferMsg.bind(this);
  }

  transferMsg() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <nav>
        <NavBar transferMsg={this.transferMsg}/>
        <NavDrawer
          msg={this.state.open}
          transferMsg={this.transferMsg}
        />
      </nav>
    )
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.transferMsg();
  }

  render() {
    return (
      <AppBar
        title="CTG Club"
        iconClassNameRight="mudiocs-icon-navigation-expand-more"
        onLeftIconButtonClick={this.handleMenuClick}
      />
    );
  }
}

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.handleToggle= this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    //event.preventDefault();
    //event.stopPropagation();
    this.props.transferMsg();
  }

  handleClose() {

    //event.preventDefault();
    //event.stopPropagation();
    this.props.transferMsg();
  }
  
  render() {
    return (
      <Drawer
          docked={false}
          width={200}
          open={this.props.msg}
          onRequestChange={this.handleToggle}
      >
        <MenuItem onClick={this.handleClose}> Menu Item1</MenuItem>
        <MenuItem onClick={this.handleClose}> Menu Item2</MenuItem>
      </Drawer>
    )
  }
}

export default Nav;
