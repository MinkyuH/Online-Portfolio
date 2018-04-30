import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles/styles';

export default () => (
    <div id="top-layer" style={styles.firstLayout}>
        <div style={styles.firstLayout.container}>
            <h2 style={styles.firstLayout.container.content}>I'M STEVEN HAM</h2>
            <h3 style={styles.firstLayout.container.content}>SOFTWARE DEVELOPER</h3>
        </div>
        <RaisedButton label="Download My Resume"/>
    </div>
);
