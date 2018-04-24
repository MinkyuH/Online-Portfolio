import React from 'react';
import Paper from 'material-ui/Paper';
import findMe from '../assets/findMe.png';
import forgottenSaga from '../assets/forgottenSaga.png';
import qwiky from '../assets/qwiky.png';
import logo from '../assets/logo.svg';
import styles from '../styles/styles';

export default()=> (
    <div id="FourthLayer" style={styles.fourthLayout}>
        <div>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>Project FindMe</h3>
                <img src={findMe} alt="project1" style={styles.fourthLayout.img}/>
                <p>abc</p>
            </Paper>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>Project Forgotten Saga</h3>
                <img src={forgottenSaga} alt="project3" style={styles.fourthLayout.img}/>
                <p>ghi</p>
            </Paper>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>Project Qwiky</h3>
                <img src={qwiky} alt="project4" style={styles.fourthLayout.img}/>
                <p>ghi</p>
            </Paper>
        </div>
    </div>

)