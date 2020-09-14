import React from 'react';
import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles['lds-dual-ring']}></div>
  );
}

export default Spinner;
