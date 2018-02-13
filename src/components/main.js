import React, {Component} from 'react';
import Item from './Items';
import '../stylesheets/main.css'
import {GridList, GridTile} from 'material-ui/GridList';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='root'>
        <GridList
          cols={3}
          rows={2}
          
          padding={2}
          className='gridList'
        >
          <GridTile className='grid-cell'>
            <Item />
          </GridTile>
          <GridTile>
            <Item />
          </GridTile>
          <GridTile>
            <Item />
          </GridTile>
          <GridTile>
            <Item />
          </GridTile>
  
        </GridList>
      </div>
    )
  }
}

export default Main;