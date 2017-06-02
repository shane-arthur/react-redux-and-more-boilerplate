import React, { Component } from 'react';
import PictureIcon from '../../components/PictureIcon/PictureIcon';
import { styles } from './styles';
import { sendData } from '../../data/sendData';

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

            return pictureIds.indexOf(Number(pictureId)) >= 0;
        };

        const translatePictureId = (pictureName) => {
            return findObjectByValue(this.props.pictureMappings, pictureName, NaN);
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

        const onCheckboxClick = (payload) => {
            sendData('/endpoint', payload).then(response => {
                //do nothing
            }).catch(error => {
                //catch error
            })
        };

        return this.props.pictureList.map(picture => {
            const pictureName = picture.split(".jpg")[0];
            const pictureId = translatePictureId(pictureName);
            const isPicSelected = doesPicExist(pictureId);

            return <PictureIcon
                selectedData={formSelectedPicturePayload(pictureName, pictureId)}
                onClick = {onCheckboxClick}
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