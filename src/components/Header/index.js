import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css'

const Header = () => {
    return (
        <header className="root">
            <div className={ styles.forest}></div>
            <div className={styles.container}>
                <h1>This is title</h1>
                <p>This is Description</p>
            </div>
        </header>
    )
}
export default Header;