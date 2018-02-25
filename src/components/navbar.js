import React, { Component } from 'react';
import '../stylesheets/Nav.css'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import eventProxy from '../tools/eventProxy';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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
  handleMenuItemClick() {
    eventProxy.trigger('close', false);
  }
  render() {
    return (
      <ul className='normal-list'>
        <MenuItem onClick={this.handleMenuItemClick} key={0}>首页</MenuItem>
        {BranchItemDatas.map((item) => {
          return (
            <MenuItem onClick={this.handleMenuItemClick} key={item.key}>{item.name}</MenuItem>
          );
        })}
        <MenuItem onClick={this.handleMenuItemClick} key={6}>关于CTG</MenuItem>
        <MenuItem onClick={this.handleMenuItemClick} key={7}>联系我们</MenuItem>
      </ul>
    )
  }
}
//
export default Nav;