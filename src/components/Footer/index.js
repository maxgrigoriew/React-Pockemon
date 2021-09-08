import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <h3>thancs for visiting</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}

export default Footer;