import React from 'react'
import styles from './Topbar.module.css';
const Topbar = () => {
    return (
        <div className={styles.Topbar}>
            <div className="float-start">
                <div className={styles.topbar_para}>
                    <p>Free shipping for standard order over $100</p>
                </div>
            </div>
            <div className="float-end">
                <div className={styles.topbar_list}>
                    <a href="">Help & FAQs</a>
                    <a href="">My Account</a>
                    <a href="">EN</a>
                    <a href="">USD</a>
                </div>
            </div>
        </div>
    )
}

export default Topbar