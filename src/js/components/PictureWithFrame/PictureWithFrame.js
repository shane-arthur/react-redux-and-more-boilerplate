import React, { Component } from 'react';
import { styles } from './styles';

export default class PictureWithFrame extends Component {

  _getPicture() {
    const image = require(`../../../../assets/images/${this.props.pictureName}.jpg`); // eslint-disable-line global-require, import/no-dynamic-require
    const alternateImage = 'picture-with-frame';
    return (
      <img style={styles.picture} src={image} alt={alternateImage} />); // eslint-disable-line react/jsx-filename-extension, max-len
  }

  render() {
    const picture = this._getPicture(); // eslint-disable-line no-underscore-dangle
    return (
      <div style={styles.wrapper}> {picture} </div>
    );
  }
}
