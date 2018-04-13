import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/logo.svg';
import styles from '../styles/styles';

export default()=> (
    <div id="FourthLayer" style={styles.fourthLayout}>
        <div>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>Project FindME</h3>
                <img src={logo} alt="project1" style={styles.fourthLayout.img}/>
                <p>abc</p>
            </Paper>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>Project Bidmon</h3>
                <img src={logo} alt="project2" style={styles.fourthLayout.img}/>
                <p>def</p>
            </Paper>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>Project Forgotten Saga</h3>
                <img src={logo} alt="project3" style={styles.fourthLayout.img}/>
                <p>ghi</p>
            </Paper>
        </div>
    </div>

)