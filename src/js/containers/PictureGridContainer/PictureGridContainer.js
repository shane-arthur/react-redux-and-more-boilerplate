import React, { Component } from 'react';
import PictureIcon from '../../components/PictureIcon/PictureIcon';
import { styles } from './styles';

const pictureIds = this.props.items.map(item => {
    return item.pictureId;
});

export default class PictureGridContainer extends Component {

    _getPictureContainerItems() {
        return this.props.pictureList.map(picture => {
            const pictureName = picture.split('.jpg')[0];
            return <PictureIcon key={pictureName} selectedClass={'icon'} pictureName={pictureName} />
        });
    }

    render() {
        const picturesToDisplay = this._getPictureContainerItems();
        return (
            <div style={styles.wrapper}>
                {picturesToDisplay}
            </div>
        );
    }
}