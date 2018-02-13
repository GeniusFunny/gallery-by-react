import React, { Component } from 'react';
import { CardHeader, CardMedia, CardTitle, CardText, CardActions, Card } from 'material-ui/Card';
import FlutButton from 'material-ui/FlatButton';
import JS from './JavaScript.png';
import '../stylesheets/Items.css';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>

        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={JS} alt="JavaScript" />
        </CardMedia>

        <CardText></CardText>


        <CardActions>
          <FlutButton label="报名" />
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
      <section>
        <Item />
        <Item />
        <Item />
      </section>
    )
  }
}
export default Item;