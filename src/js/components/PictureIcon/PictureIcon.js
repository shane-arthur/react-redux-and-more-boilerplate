import React, { Component } from 'react';
import PictureWithFrame from '../PictureWithFrame/PictureWithFrame';
import LargePictureIcon from '../LargePictureIcon/LargePictureIcon';
import { styles } from './styles';

export default class PictureIcon extends Component {

    componentDidMount() {
        this.setState({
            hovered: false
        });
    }

    _toggleHover(isHovered) {
        this.setState({ hovered: isHovered });
    }

    _getIconToolTip() {
        if (this.state) {
            return this.state.hovered ?
                <LargePictureIcon
                    pictureName={this.props.pictureName}
                    selected={this.props.selected} onClick={this.props.onClick}
                    pictureMappings={this.props.pictureMappings} /> :
                null;
        }
        else {
            return null;
        }
    }

    _getStyleClassName(isSelected) {
        return isSelected ? 'selected' : 'notSelected';
    }

    render() {
        const toolTip = this._getIconToolTip();
        return (
            <div onClick={this._toggleHover.bind(this, true)} onMouseLeave={this._toggleHover.bind(this, false)} style={styles[this._getStyleClassName(this.props.selected)]}>{toolTip}<PictureWithFrame selectedClass={'icon'} pictureName={this.props.pictureName} /></div>
        );
    }
}