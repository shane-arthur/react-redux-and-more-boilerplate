import React, { Component } from 'react';

export default class SelectedRadioButton extends Component {

    render() {
        const shane = true;
        return (
            <input type="checkbox" defaultChecked={this.props.selected}/>
        )
    }
}