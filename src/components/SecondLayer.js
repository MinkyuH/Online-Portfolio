import React from 'react';
import Avatar from 'material-ui/Avatar';
import Group from 'material-ui/svg-icons/social/group';
import Creative from 'material-ui/svg-icons/action/lightbulb-outline';
import Dedicated from 'material-ui/svg-icons/social/person';
import dp from '../assets/profile.png';
import styles from '../styles/styles';

export default () => (
    <div id = "SecondLayer" style = {styles.secondLayout} >
        <img src={dp} alt="steven" />
        <h1 style={styles.secondLayout.heading}>About</h1>
        <p style={styles.secondLayout.bodyText}>
            I enjoy teamwork and being part of a determined and motivated group of people. I bring to any group a goal-based, practical mindset and holistic thinking. I am focused on pursuing a career in New Zealand’s IT industry with computer science and Information System bachelor background.
        </p>
        <div style={styles.secondLayout.container}>
            <div style={styles.secondLayout.container.content}>
                <Avatar icon={<Group />} backgroundColor="#1D232A" size={70} />
                <p style={styles.secondLayout.container.content.text}>Team Player</p>
            </div>
            <div style={styles.secondLayout.container.content}>
                <Avatar icon={<Creative />} backgroundColor="#1D232A" size={70} />
                <p style={styles.secondLayout.container.content.text}>Creative</p>
            </div>
            <div style={styles.secondLayout.container.content}>
                <Avatar icon={<Dedicated />} backgroundColor="#1D232A" size={70} />
                <p style={styles.secondLayout.container.content.text}>Dedicated</p>
            </div>
        </div>
    </div>
);
