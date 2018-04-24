import React from 'react';
import IconButton from 'material-ui/IconButton';
import {GitHubLogo, LinkedInLogo, EmailIcon} from '../components/icons';
import logo from '../assets/logo.svg';
import styles from '../styles/styles';

export default () => (
    <div id="top-layer" style={styles.topLayer}>
        <img src={logo} alt="logo" style={styles.topLayer.img} />
        <div>
            <IconButton href="https://github.com/minkyuh" target="_blank" tooltip = "GitHub">
                <GitHubLogo style = {styles.topLayer.icon}/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/steven-ham-6a5406140" target="_blank" tooltip = "LinkedIn">
                <LinkedInLogo style = {styles.topLayer.icon}/>
            </IconButton>
            <IconButton href="mailto:minkyuh0430@gmail.com" tooltip = "Email">
                <EmailIcon style = {styles.topLayer.icon}/>
            </IconButton>
        </div>
    </div>
);
