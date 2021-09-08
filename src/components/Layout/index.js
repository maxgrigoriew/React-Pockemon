import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css'

const Layout = () => {
    return (
    <section class="root">
            <div class="wrapper">
                <article>
                    <div class="title">
                        {/* <h3><-- ЗДЕСЬ props.title --></h3> */}
                        <h3></h3>
                        <span class="separator"></span>
                    </div>
                    <div class="desc full">
                        {/* <p><-- ЗДЕСЬ props.desc --></p> */}
                        <p></p>
                    </div>
                </article>
            </div>
    </section>
    )
}
export default Layout;