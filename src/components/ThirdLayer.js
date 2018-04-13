import React from 'react';
import styles from '../styles/styles';

export default () => (
    <div id="ThirdLayer" style={styles.thirdLayout}>
        <h1>Skills</h1>
        <div style={styles.thirdLayout.container}>
            <h3 style={styles.thirdLayout.text}>Development</h3>
            <p style={styles.thirdLayout.text}>C#</p>
            <p style={styles.thirdLayout.text}>Xamarin</p>
            <p style={styles.thirdLayout.text}>Node.js</p>
            <p style={styles.thirdLayout.text}>React Native, React.js</p>
            {/* <p style={styles.thirdLayout.text}></p> */}
        </div>
        <div style={styles.thirdLayout.container}>
            <h3 style={styles.thirdLayout.text}>Database</h3>
            <p style={styles.thirdLayout.text}>Microsoft Azure</p>
            <p style={styles.thirdLayout.text}>T-SQL</p>
            <p style={styles.thirdLayout.text}>MySQL</p>
            <p style={styles.thirdLayout.text}></p>

        </div>
        <div style={styles.thirdLayout.container}>
            <h3 style={styles.thirdLayout.text}>Apple-pen</h3>
            <p style={styles.thirdLayout.text}>Pineapple-pen</p>
        </div>
    </div>
);
