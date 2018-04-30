import React from 'react';
import Avatar from 'material-ui/Avatar';
import {EmailIcon, LinkedInLogo, GitHubLogo} from '../components/icons';
import styles from '../styles/styles';

export default () => (
    <div id="SixthLayer" style={styles.sixthLayout}>
        <h1 style={styles.sixthLayout.heading}>Contact</h1>
        <p>Want to find out more about me?</p>
        <div style={styles.sixthLayout.container}>
            <div style={styles.sixthLayout.container.content}>
                <a href="mailto:minkyuham0430@gmail.com">
                    <Avatar icon={<EmailIcon />} backgroundColor="white" color="#1D232A" size={70} />
                </a>
                <p style={styles.sixthLayout.container.content.text}>Email</p>
            </div>
            <div style={styles.sixthLayout.container.content}>
                <a href="https://www.linkedin.com/in/steven-ham-6a5406140" target="_blank" rel="noopener noreferrer">
                    <Avatar icon={<LinkedInLogo />} backgroundColor="white" color="#1D232A" size={70} />
                </a>
                <p style={styles.sixthLayout.container.content.text}>LinkedIn</p>
            </div>
            <div style={styles.sixthLayout.container.content}>
                <a href="https://www.github.com/minkyuh" target="_blank" rel="noopener noreferrer">
                    <Avatar icon={<GitHubLogo />} backgroundColor="white" color="#1D232A" size={70} />
                </a>
                <p style={styles.sixthLayout.container.content.text}>GitHub</p>
            </div>
        </div>
    </div>
);
