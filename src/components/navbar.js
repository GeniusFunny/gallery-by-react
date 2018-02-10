import React from 'react';
class NavItem extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isActive: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      isActive: true
    });
    alert('fuck');
    e.preventDefault();
  }
  
  render() {
    return (
      <button onClick={this.handleClick}> {this.props.value} </button>
    )
  }

}
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.itemDatas = props.children.datas;
  }
  render() {
    const navItems = this.itemDatas.map((value, index) =>
      <NavItem key={index} value={value} />
    );
    return (
      <nav>
        {navItems}
      </nav>
    )
  }
}


export default Nav;