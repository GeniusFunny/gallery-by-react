import React, { Component } from 'react';
import { CardHeader, CardMedia, CardTitle, CardText, CardActions, Card } from 'material-ui/Card';
import FlutButton from 'material-ui/FlatButton';
import JS from './JavaScript.png';
import '../stylesheets/Items.css';
import { GridList, GridTile } from 'material-ui/GridList';


class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardMedia>
          <img src={JS} alt="JavaScript" />
        </CardMedia>
        <CardText>
          JavaScript，一种高级编程语言，通过解释执行，是一门动态类型，面向对象（基于原型）的解释型语言[4]。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化[4]。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、FireFox、Safari、Opera）支持。JavaScript是一门基于原型、函数先行的语言[5]，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。
        </CardText>
        <CardActions>
          <FlutButton label="报名" style={{float: 'right'}}/>
        </CardActions>
      </Card>
    )
  }
}

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
        <Item className='item'/>
        <Item className='item'/>
        <Item className='item'/>
      </div>
    )
  }
}
export default Items;