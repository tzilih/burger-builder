import React from 'react';

import styles from './Modal.module.css';

const modal = props => (
    <div className={styles.modal}>
        {props.children}
    </div>
);

export default modal;