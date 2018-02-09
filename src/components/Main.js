require('normalize.css');
require('../styles/App.scss');
import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageData.json');
//利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImangeURL(ImageDataArr) {
  for (let i = 0, j = ImageDataArr.length; i < j; i++) {
    let singleImageData = ImageDataArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    ImageDataArr[i] = singleImageData;
  }
  return ImageDataArr;
})(imageDatas);

class ImageFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}
        />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
}

class AppComponent extends React.Component {
  render() {

    let controllerUnits = [],
        imgFigures = [];
      imageDatas.forEach(function(value) {
        imgFigures.push(<ImageFigure data={value} />);
      });
    return (
      <section className="stage">
        <section className='img-sec'>
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>

      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
