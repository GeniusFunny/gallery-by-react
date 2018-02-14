import React, { Component } from 'react';
import '../App.css';
import '../stylesheets/Nav.css'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import eventProxy from '../tools/eventProxy';
import MenuItem from 'material-ui/MenuItem';

const BranchItemDatas = [
  {
    name: 'Web研发部',
    imgUrl: null,
    imgTitle: null,
    intro: null,
    key:1
  },
  {
    name: '移动开发部',
    imgUrl: null,
    imgTitle: null,
    intro: null,
    key: 2
  },
  {
    name: '视觉设计部',
    imgUrl: null,
    imgTitle: null,
    intro: null,
    key: 3
  },
  {
    name: '产品运营部',
    imgUrl: null,
    imgTitle: null,
    intro: null,
    key: 4
  },
  {
    name: '运维安全部',
    imgUrl: null,
    imgTitle: null,
    intro: null,
    key: 5
  }
];

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
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick() {
    eventProxy.trigger('open', true);
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

  componentDidMount() {
    eventProxy.on('open', () => {
      this.setState({
        open: true
      });
    });
    eventProxy.on('close', () => {
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
    eventProxy.trigger('close', false);
  }
  render() {
    return (
      <ul className='normal-list'>
        <MenuItem onClick={this.handleMenuItemClick}>首页</MenuItem>
        {BranchItemDatas.map((item) => {
          return (
            <MenuItem onClick={this.handleMenuItemClick} key={this.key}>{item.name}</MenuItem>
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