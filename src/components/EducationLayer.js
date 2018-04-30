import React from 'react';
import Avatar from 'material-ui/Avatar';
import School from 'material-ui/svg-icons/social/school';
import styles from '../styles/styles';

export default () => (
    <div id = "SecondLayer" style = {styles.educationLayout} >
        <Avatar icon={<School />} backgroundColor="white" color="#1D232A" size={100} />
        <h1 style={styles.educationLayout.heading}>Education</h1>
        <h3>University of Auckland - Bachelor of Science (Graduated)</h3>
        <h3>Computer Science and Information Systems</h3>
    </div>
);
