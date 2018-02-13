import React, {Component} from 'react';
import{CardHeader, CardMedia, CardTitle, CardText, CardActions, Card} from 'material-ui/Card';
import FlutButton from 'material-ui/FlatButton';
import JS from './JavaScript.png';
import '../stylesheets/Items.css';

class Item extends Component {
  
  constructor(props) {
    super(props);
    this.styles = {
      img: {
        width: 300 + 'px'
      }
    }
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Web研发部"
          subtitle=""
        />
        
        <CardTitle
          title=""
        />

        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
        <img src={JS} alt="JavaScript" style={this.styles.img}/>
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
export default Items;