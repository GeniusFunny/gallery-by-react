import React, { Component } from 'react';
import '../App.css';
import '../stylesheets/Nav.css'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import eventProxy from '../tools/eventProxy';
import MenuItem from 'material-ui/MenuItem';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavBar />
        <NavDrawer />
      </nav>
    );
  }
}

class NavBar extends Component {
  
  render() {
    return (
      <AppBar
        title="CTG Club"
        iconClassNameRight="mudiocs-icon-navigation-expand-more"
        onLeftIconButtonClick={eventProxy.trigger('open', true)}
      />
    );
  }
}

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }
  
  componentDidMount(){
    eventProxy.on('open',() => {
      this.setState({
        open: true
      });
    });
    //When click MenuItem, close Drawer.
    eventProxy.on('close',() => {
      this.setState({
        open: false
      });
    });
  }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={this.handleToggle}
      >
      <MenuItems />
      </Drawer>
    )
  }
}

class MenuItems extends Component {
  constructor(props) {
    super(props);
  }
  handleMenuItemClick() {
    eventProxy.trigger('close',false);
  }
  render() {
    return (
      <ul className='normal-list'>
        <MenuItem onClick={this.handleMenuItemClick}>首页</MenuItem>
        {BranchItemDatas.map((item) => {
          return (
            <MenuItem onClick={this.handleMenuItemClick}>{item.name}</MenuItem>
          )
        })}
        <MenuItem onClick={this.handleMenuItemClick}>关于CTG</MenuItem>
        <MenuItem onClick={this.handleMenuItemClick}>联系我们</MenuItem>
      </ul>
    )
  }
}
//
export default Nav;
