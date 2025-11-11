import React from 'react';
import styles from './Loader.module.css';
import loader from '../../assets/ajax-loader.gif';

const Loader = () => {
    return (
        <div className={styles.loader_page}>
            <img src={loader} alt="" />
        </div>
    )
}

export default Loader