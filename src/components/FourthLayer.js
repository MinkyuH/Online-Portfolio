import React from 'react';
import Paper from 'material-ui/Paper';
import trustPower from '../assets/trustPower.png';
import qwiky from '../assets/qwiky.png';
import styles from '../styles/styles';

export default()=> (
    <div id="FourthLayer" style={styles.fourthLayout}>
        <div>
            <Paper zDepth={3} style={styles.fourthLayout.container}>
                <h3>TrustPower Internship</h3>
                <img src={trustPower} alt="trustPower" style={styles.fourthLayout.img}/>
                <p>Mobile App created using Xamarin</p>
            </Paper>
            <a href="https://badboiz.github.io/frontend/">
                <Paper zDepth={3} style={styles.fourthLayout.container}>
                    <h3>Project Qwiky</h3>
                    <img src={qwiky} alt="qwiky" style={styles.fourthLayout.img}/>
                    <p>2017 Summer Of Tech Hackfest Project</p>
                </Paper>
            </a>
        </div>
        <div>
            <Paper zDepth={3} style={styles.fourthLayout.youtube}>
                <h3>Project Forgotten Saga</h3>
                <iframe title="forgottenSaga" width="560" height="315" src="https://www.youtube.com/embed/vHnKufw_vBg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <p>RPGXP Game Engine, Ruby script</p>
            </Paper>
        </div>
    </div>

)