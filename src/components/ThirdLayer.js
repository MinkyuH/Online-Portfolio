import React from 'react';
import Avatar from 'material-ui/Avatar';
import Code from 'material-ui/svg-icons/action/code';
import styles from '../styles/styles';

export default () => (
    <div id="ThirdLayer" style={styles.thirdLayout}>
        <Avatar icon={<Code />} backgroundColor="#1D232A" size={100} />
        <h1 style={styles.thirdLayout.heading}>Skills</h1>
        <div style={styles.thirdLayout.container}>
            <h3>Development</h3>
            <p>C#</p>
            <p>Xamarin</p>
            <p>Java</p>
            <p>Node JS</p>
            <p>React</p>
            <p>Ruby</p>
        </div>
        <div style={styles.thirdLayout.container}>
            <h3>Practical</h3>
            <p>Git</p>
            <p>Jira</p>
            <p>DevOps</p>
            <p>Agile</p>
        </div>
        <div style={styles.thirdLayout.container}>
            <h3>Data</h3>
            <p>T-SQL</p>
            <p>MySQL</p>
            <p>NoSQL</p>
            <p>Business Intelligence</p>
            <p>Microsoft Azure / Firebase</p>
        </div>
    </div>
);
