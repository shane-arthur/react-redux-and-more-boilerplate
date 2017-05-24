import React, { Component } from 'react';
import VoteSelector from '../VoteSelector/VoteSelector';
//import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import VoteCountWidget from '../VoteCountWidget/VoteCountWidget';
import { styles } from './styles';

export default class ListItem extends Component {

    componentDidMount() {
        this.setState({
            hovered: false
        });
    }

    _toggleHover(isHovered) {
        this.setState({ hovered: isHovered });
    }

    _renderListItem() {
        const formLiStyle = (pictureId) => {
            return pictureId === this.props.selectedId ? styles.listItemSelected : styles.listItem;
        }

        const voteCountWidget = (() => {
            if (this.state){
            return (this.state.hovered ? <VoteCountWidget
                voteCount={this.props.item.voteCount}
                name={this.props.item.content}
                pageId={this.props.pageId}
                pictureId={this.props.item.pictureId}
                updateVoteCount = {this.props.actions.updateVoteCount} /> : null)
            }
            else {
                return null;
            }
        })();
        
        return (<div key={this.props.item.pictureId}>
            <div style={styles.listItem}>
            <div onMouseEnter={this._toggleHover.bind(this, true)} onMouseLeave={this._toggleHover.bind(this, false)}>
                <VoteSelector
                    pictureId={this.props.item.pictureId}
                    pageId={this.props.pageId}
                    onSelected={this.props.actions.castVoteForPicture}
                    voteCount={this.props.item.voteCount} /></div>
                    </div>
            <li onClick={this._setSelectedListItem.bind(this, this.props.item.pictureId)} style={formLiStyle(this.props.item.pictureId)} key={this.props.item.pictureId}>
                {this.props.item.content}
            </li>
            {voteCountWidget}
        </div>);
    }

    _setSelectedListItem(listItemId) {
        this.props.actions.setselectedPicture(this.props.pageId, listItemId);
    }

    render() {
        const listItem = this._renderListItem();
        return (
            <div>{listItem}</div>
        );
    }


}