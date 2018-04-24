import React from 'react';
import logo from '../assets/logo.svg';
import styles from '../styles/styles';

export default () => (
    <div id = "SecondLayer" style = {styles.secondLayout} >
        <h1 style={styles.secondLayout.heading}>About</h1>
        <img src={logo} alt="logo2" style={styles.secondLayout.img} />
        <p style={styles.secondLayout.bodyText}>
            I enjoy teamwork and being part of a determined and motivated group of people. I bring to any group a goal-based, practical mindset and holistic thinking. I am focused on pursuing a career in New Zealand’s IT industry with computer science and Information System bachelor background.
        </p>
    </div>
);
