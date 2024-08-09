import React from 'react';
import styles from './Display.module.css';

const Display = ({ value }) => (
    <div className={styles.display}>{value}</div>
);

export default Display;