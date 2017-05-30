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
            let pictureId = 13141;
            Object.keys(pictureList).forEach(key => {
                if (pictureList[key] === pictureName){
                    pictureId = key;
                }
            });
            return pictureId;
        };

        
        return this.props.pictureList.map(picture => {
            const pictureName = picture.split(".jpg")[0]; 
            const pictureId = translatePictureId(pictureName);
            const isPicSelected = doesPicExist(pictureId);
            return <PictureIcon key={pictureName} selectedClass={'icon'} pictureName={pictureName} selected={isPicSelected} />
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