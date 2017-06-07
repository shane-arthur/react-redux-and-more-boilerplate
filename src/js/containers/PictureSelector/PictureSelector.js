import React, { Component } from 'react';
import ListView from '../../components/ListView/ListView';
import PictureWithFrame from '../../components/PictureWithFrame/PictureWithFrame';
import { styles } from './styles';

export default class PictureSelector extends Component {


  _getSelectedPicture() {
    const selectedPic = this.props.pictureMappings[this.props.selectedPictureId];
    if (selectedPic) {
      return <PictureWithFrame pictureName={selectedPic} selectedClass={'largeFrame'} />; // eslint-disable-line react/jsx-filename-extension, max-len
    }
    
    return null;
  }


  render() {
    const picture = this._getSelectedPicture(); // eslint-disable-line no-underscore-dangle
    const listView = (
      <ListView
        items={this.props.items}
        actions={this.props.actions}
        pageId={this.props.pageId}
        selectedId={this.props.selectedPictureId}
        />);

    return (
      <div>
        <div style={styles.header}>{listView}</div>
        {picture}
      </div>
    );
  }
}
