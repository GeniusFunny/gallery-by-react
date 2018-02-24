import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import JS from './JavaScript.png';
import '../stylesheets/Lunbo.css';
const titleData = [
  {
    img: JS,
    title: 'js',
    author: 'bitch'
  },
  {
    img: JS,
    title: 'js',
    author: 'bitch'
  },
  {
    img: JS,
    title: 'js',
    author: 'bitch'
  },
  {
    img: JS,
    title: 'js',
    author: 'bitch'
  }
]
class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='root'>
        <GridList className='gridList' cols={1} rows={2}>
          {titleData.map((title) => (
            <GridTile
              className='item'
              key={title.img}
              title={title.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
            >
              <img src={JS}/>
            </GridTile>
          ))}
          </GridList>
      </section>
    )
  }
}

export default Slider;