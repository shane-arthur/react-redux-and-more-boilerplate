import React, { Component } from 'react';
import ListView from '../../components/ListView/ListView';
import PictureWithFrame from '../../components/PictureWithFrame/PictureWithFrame';
import { pictureMappings } from '../../constants/other-constants/pictureMappings';
import { styles } from './styles';

export default class PictureSelector extends Component {

  _getSelectedPicture() {
    const selectedPic = pictureMappings[this.props.pageId][this.props.selectedPictureId];
    if (selectedPic) {
      return <PictureWithFrame pictureName={selectedPic} />; // eslint-disable-line react/jsx-filename-extension, max-len
    }

    return null;
  }

  _orderItemsByVoteCount(items) {
    return items.sort((firstItem, secondItem) => {
      return firstItem.voteCount < secondItem.voteCount;
    });
  }

  render() {
    const picture = this._getSelectedPicture(); // eslint-disable-line no-underscore-dangle
    const listView = (
      <ListView
        items={this._orderItemsByVoteCount(this.props.items)}
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
