import React, { Component } from 'react';
import PictureWithFrame from '../PictureWithFrame/PictureWithFrame';
import SelectedRadioButton from '../SelectedRadioButton/SelectedRadioButton';
const style = {
    display: 'inline-block'
};

export default class LargePictureIcon extends Component {

    _formPanelHeader() {
        return (<div><h3 style={style}>{this.props.pictureName}</h3>
            <div style={style}><SelectedRadioButton /></div></div>);
    }

    render() {
        const header = this._formPanelHeader();

        return (
            <div style={{width: '375px', height:'350px', border: '1px solid black', textAlign:'center', borderRadius: '10px', position: 'absolute', background: '#ffffff'}}>
                {header}
                <PictureWithFrame pictureName={this.props.pictureName} selectedClass={'toolTip'} />
            </div>);
    }
}