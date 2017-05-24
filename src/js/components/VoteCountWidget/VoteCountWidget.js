import React, { Component } from 'react';
import { styles } from './styles';

export default class VoteCountWidget extends Component {

    render() {
        return (
            <div style={styles.widget}>
            <p> {this.props.name} </p>
            <p style={styles.text}> votes : {this.props.voteCount}</p>
            </div>
        );
    }
}