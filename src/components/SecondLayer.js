import React from 'react';
import logo from '../assets/logo.svg';
import styles from '../styles/styles';

export default () => (
<div id = "SecondLayer" style = {styles.secondLayout} >
    <h1>About</h1>
    <img src = {logo} alt = "logo2" style = {styles.secondLayout.img} />
    <p style = {styles.secondLayout.bodyText}> "This is steven's website"</p>
    <p style = {styles.secondLayout.bodyText}> "Test setence 101" </p>
    <p style = {styles.secondLayout.bodyText}> "Test setnece 202" </p>
</div>
);