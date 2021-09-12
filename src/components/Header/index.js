/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

const Header = (props) => {
	return (
		<header className={styles.root}>
			<div className={styles.forest}></div>
			<div className={styles.container}>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</div>
		</header>
	);
};

export default Header;
