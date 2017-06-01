import React, { Component } from 'react';


export default class SelectedRadioButton extends Component {

    _onClick() {
        const data = {};
        return this.props.onClick(this.props.selected, this.props.name)
    }

    render() {
        return (
            <input type="checkbox" onClick={this._onClick.bind(this)} defaultChecked={this.props.selected} />
        )
    }
}