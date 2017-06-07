/* eslint react/jsx-filename-extension : 0, max-len : 0*/
import React, { Component } from 'react';
import { styles } from './styles';
import ListItem from '../ListItem/ListItem';
const io = require('socket.io-client')
const socket = io(`http://localhost:3000`);

export default class ListView extends Component {
    componentDidMount() {
        this.setState({
            hovered: null
        });
          socket.on('voteCountChanged', (data) => {
            const { pageId, pictureId } = data;
            this.props.actions.updateVoteCount(pageId, pictureId)
        });
    }
    
    _toggleHover(pictureId, isOnEnter) {
        this.setState({
            hovered: isOnEnter ? pictureId : null
        });
    }

    _renderListWithItems() {
        const getItems = () => this.props.items.map(item => {
            return <ListItem key={item.pictureId} selectedId={this.props.selectedId}
                pageId={this.props.pageId}
                actions={this.props.actions}
                item={item} />
        });

        return (<ul style={styles.list}> {getItems()} </ul>);
    }

    render() {
        const list = this._renderListWithItems(); // eslint-disable-line no-underscore-dangle
        return (<div>
            {list}
        </div>
        );
    }
}
