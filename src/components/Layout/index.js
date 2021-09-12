/** @format */

import React from 'react';
import styles from './style.module.css';

const Layout = ({title, urlBg, colorBg, children, color}) => {
	const layoutStyle = urlBg
		? {backgroundImage: `url(${urlBg})`}
		: { backgroundColor: colorBg };

	return (
		<section className={styles.root} style={{color}} style={layoutStyle}>
			<div className={styles.wrapper}>
				<article>
					<div className={styles.title}>
						<h3 style={{color}}> {title} </h3>
						<span className={styles.separator}></span>
					</div>
					<div className={`${styles.desc} ${styles.full} `}>
						{children}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Layout;
