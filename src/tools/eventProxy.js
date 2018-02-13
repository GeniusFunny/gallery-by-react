import React,{Component} from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'start'
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'end'
      })
    }, 1000);
  }
  render() {
    return <Child_1 msg={this.state.msg} />
  }
}

class Child_1 extends Component {
  render() {
    return <p>{this.props.msg}</p>
  }
}
export default Parent;