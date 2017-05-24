import React, { Component } from 'react';
import { styles } from './styles';
import Radium from 'radium';
const io = require('socket.io-client')
const socket = io(`http://localhost:3000`);

@Radium
export default class VoteSelector extends Component {

    _getAdditionIcon() {
        const image = require('../../../../assets/images/addIcon.jpg');
        return <img src={image} alt="Add Icon" />;
    }

    _toggleHover(isHovered) {
        this.props.mouseEvent(isHovered)
    }

    _onClicked(pageId, pictureId, voteCount){
        this.props.onSelected(pageId, pictureId, voteCount, socket);
    }

    render() {
        const picture = this._getAdditionIcon();
        return (
            <div style={styles.wrapper}><div onClick={this._onClicked.bind(this, this.props.pageId, this.props.pictureId, this.props.voteCount)}>{picture}</div></div>
        );
    }
}