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
        <CardActions>
          <FlutButton label="报名" style={{}}/>
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
      <div className='root'>
        <GridList
          cols={3}
          rows={3}
          padding={8}
          className='gridList'
        >
            <Item />
            <Item />
            <Item />
        </GridList>
      </div>
    )
  }
}
export default Items;