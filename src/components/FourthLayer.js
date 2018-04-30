import React from 'react';
import Avatar from 'material-ui/Avatar';
import Work from 'material-ui/svg-icons/action/work';
import styles from '../styles/styles';

export default () => (
    <div id="FourthLayer" style={styles.fourthLayout}>
        <Avatar icon={<Work />} backgroundColor="white" color="#1D232A" size={100} />
        <h1 style={styles.fourthLayout.heading}>Experiences</h1>
        <table style={styles.fourthLayout.container}>
            <tr>
                <td>
                    <h2>Trustpower - Software Development Intern (December 2017 - February 2018)</h2>
                    <ul style={styles.fourthLayout.container.lists}>
                        <li style={styles.fourthLayout.container.lists.item}>Cross-Platform Mobile App (Xamarin Native), built for the project "Monster"</li>
                        <li style={styles.fourthLayout.container.lists.item}>Exposure to Microsoft Azure and Hockey App for Continuous Integration and Deployment</li>
                        <li style={styles.fourthLayout.container.lists.item}>Exposure to Agile Scrum project methodology</li>
                        <li style={styles.fourthLayout.container.lists.item}>Responsible for API design and development, as well as database implementation</li>
                        <li style={styles.fourthLayout.container.lists.item}>Tools used: C#, Xamarin, Microsoft Azure, SQL, Jira</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>
                    <h2>Albany Carl's Jr - Backhand Staff Full Time (November 2015 - February 2016)</h2>
                    <ul style={styles.fourthLayout.container.lists}>
                        <li style={styles.fourthLayout.container.lists.item}>Performed friendly customer service</li>
                        <li style={styles.fourthLayout.container.lists.item}>Performed all duties within a fast-paced/high-pressured team environment</li>
                        <li style={styles.fourthLayout.container.lists.item}>Responsible for greeting customers and drive-through orders</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
);
