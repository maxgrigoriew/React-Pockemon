import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import './index.css';


// const AppList = () => {
// 	let items = ["item1", "item2", "item3"];
// 	const firstItem = "item0";
// 	const headerStyle = {
// 		color: 'red',
// 		background: 'yellow'
// 	}

// 	return ( <
// 		ul style = {
// 			headerStyle
// 		}
// 		className = 'header' > {
// 			firstItem
// 		} {
// 			items.map((item) => {
// 				return <li > {
// 					item
// 				} < /li>;
// 			})
// 		} <
// 		/ul>
// 	);
// };
// const AppInput = () => {
// 	const placeholder = "Inner Input....";

// 	return ( <
// 		label >
// 		<
// 		input type = "text"
// 		placeholder = {
// 			placeholder
// 		}
// 		/> < /
// 		label >
// 	);
// };

// const AppHeader = () => {
// 	return <h1 > Hello World < /h1>;
// };

const App = () => {
	return ( <
		div >
		<
		Header / >

		<
		Layout / >
		<
		Layout / >
		<
		Layout / >
		<
		Footer / >
		<
		/div>
	);
};

ReactDOM.render( < App / > , document.getElementById("root"));