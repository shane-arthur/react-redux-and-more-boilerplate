import React, { Component } from 'react';
import { styles } from './styles';
import Radium from 'radium';

/*export const PageSwitcher = (props) => { // eslint-disable-line import/prefer-default-export
  const linkAddress = `/${props.linkAddress}`;
  return (
    <div style={styles.wrapper}><a style={styles.text} href={linkAddress}> Switch Pages</a></div> // eslint-disable-line react/jsx-filename-extension
  );
};*/

@Radium
export default class PageSwitcher extends Component {
  render() {
    const linkAddress = `/${this.props.linkAddress}`;
    return (
      <div style={styles.wrapper}><a style={styles.text} href={linkAddress}> Switch Pages</a></div> // eslint-disable-line react/jsx-filename-extension
    );
  }
}
