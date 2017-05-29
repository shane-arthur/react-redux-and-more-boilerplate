import React, { Component } from 'react';
import PictureWithFrame from '../PictureWithFrame/PictureWithFrame';
import LargePictureIcon from '../LargePictureIcon/LargePictureIcon'

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
            return this.state.hovered ? <LargePictureIcon pictureName={this.props.pictureName} /> : null;
        }
        else {
            return null;
        }
    }

    render() {
        const toolTip = this._getIconToolTip();
        return (
            <div onClick={this._toggleHover.bind(this, true)} onMouseLeave={this._toggleHover.bind(this, false)} style={{ display: 'inline-block'}}>{toolTip}<PictureWithFrame selectedClass={'icon'} pictureName={this.props.pictureName} /></div>
        )
    }
}