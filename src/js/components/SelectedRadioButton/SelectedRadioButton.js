import React, { Component } from 'react';
import { sendData } from '../../data/dataFetcher';


export default class SelectedRadioButton extends Component {

    render() {
        return (
            <input type="checkbox" onClick={this._onClick.bind(this)} defaultChecked={this.props.selected} />
        )
    }
}