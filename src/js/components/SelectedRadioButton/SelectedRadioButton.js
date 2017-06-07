import React, { Component } from 'react';
import { sendData } from '../../data/dataFetcher';


export default class SelectedRadioButton extends Component {

    _onClick() { 
        this.props.onClick(this.props.selected)
    }

    render() {
        return (
            <input type="checkbox" onClick={this._onClick.bind(this)} defaultChecked={this.props.selected} />
        )
    }
}