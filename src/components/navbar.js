import React, { Component } from 'react';
import '../App.css';
import '../stylesheets/Nav.css'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import Parent from '../tools/eventProxy'


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
        <MenuItems />
      </Drawer>
    )
  }
}
class MenuItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className='normal-list'>
        <MenuItem>首页</MenuItem>
        <MenuItem>Web研发部</MenuItem>
        <MenuItem>移动开发部</MenuItem>
        <MenuItem>视觉设计部</MenuItem>
        <MenuItem>运维安全部</MenuItem>
        <MenuItem>产品运营部</MenuItem>
        <MenuItem>关于CTG</MenuItem>
        <MenuItem>联系我们</MenuItem>
      </ul>
    )
  }
}
export default Nav;
