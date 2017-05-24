import React, { Component } from 'react'; // eslint-disable-line import/first

export default class LoginPanel extends Component {

    render(){
        return(
            <div><label>
                    Email:
                    <input ref="emailInput" type="text" name="emailInput"/>
                </label>
                <label >
                    Password
                    <input ref="passwordInput" type="text" name="passwordInput" />
                </label></div>
        )
    }
}