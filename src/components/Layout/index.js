import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';



const Layout = ({
    title,
    description,
    urlBg,
    colorBg
}) => {
    const layoutStyle = urlBg ?
        {
            backgroundImage: `url(${urlBg})`
        } :
        {
            backgroundColor: colorBg
        };

    return ( <
        section class = {
            styles.root
        }
        style = {
            layoutStyle
        } >
        <
        div class = {
            styles.wrapper
        } >
        <
        article >
        <
        div class = {
            styles.title
        } >
        <
        h3 > {
            title
        } < /h3> <span class={styles.separator}> </span >
        <
        /div>{" "} <
        div class = "desc full" > {
            " "
        } <
        p > {
            description
        } < /p>{" "} < /
        div > {
            " "
        } <
        /article>{" "} < /
        div > {
            " "
        } <
        /section>
    );
};
export default Layout