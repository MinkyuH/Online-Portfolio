import React from 'react';
import logo from '../assets/logo.svg';
import styles from '../styles/styles';

export default () => (
    <div id="top-layer" style={styles.topLayer}>
        <img src={logo} alt="logo" style={styles.topLayer.img} />
        <div>
            <p style={styles.topLayer.text}>Home</p>
            <p style={styles.topLayer.text}>&nbsp;|&nbsp;</p>
            <p style={styles.topLayer.text}>About</p>
            <p style={styles.topLayer.text}>&nbsp;|&nbsp;</p>
            <p style={styles.topLayer.text}>Skills</p>
            <p style={styles.topLayer.text}>&nbsp;|&nbsp;</p>
            <p style={styles.topLayer.text}>Projects</p>
        </div>
    </div>
);
