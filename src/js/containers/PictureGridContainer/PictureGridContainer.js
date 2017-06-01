import React, { Component } from 'react';
import PictureIcon from '../../components/PictureIcon/PictureIcon';
import { styles } from './styles';
import { pictureMappings } from '../../constants/other-constants/PictureMappings';


export default class PictureGridContainer extends Component {

    _getPictureContainerItems() {
        const pictureList = this.props.pictureList;
        const pictureIds = this.props.items.map(item => {
            return item.pictureId;
        });

        const doesPicExist = (pictureId) => {
            const pictureIds = this.props.items.map(item => {
                return item.pictureId;
            });

            const isSelected = pictureIds.indexOf(Number(pictureId)) >= 0;
            return isSelected;
        };

        const translatePictureId = (pictureName) => {
            const pictureList = pictureMappings[this.props.pageId];
            return findObjectByValue(pictureList, pictureName, 9999);
        };

        const findObjectByValue = (collection, value, defaultValue = null) => {
            let keyForValue = defaultValue;
            Object.keys(collection).forEach(key => {
                if (collection[key] === value)
                    keyForValue = key;
            });

            return keyForValue;
        }

        const formSelectedPicturePayload = (pictureName, pictureId) => {
            return { content: pictureName, pictureId }
        }

        return this.props.pictureList.map(picture => {
            const pictureName = picture.split(".jpg")[0];
            const pictureId = translatePictureId(pictureName);
            const isPicSelected = doesPicExist(pictureId);

            return <PictureIcon
                selectedData={formSelectedPicturePayload(this.props.pictureName, this.props.pictureId)}
                key={pictureName} selectedClass={'icon'}
                pictureName={pictureName}
                selected={isPicSelected}
                onClick={this.props.onClick}
                />
        }, this);
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