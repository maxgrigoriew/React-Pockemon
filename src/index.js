import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import './index.css';
import bg1 from "./bg1.jpg";

const App = () => {
	return ( <
		div >
		<
		Header title = "This is title"
		description = "This is Description=)" / >
		<
		Layout title = "This is title"
		description = "This is Description"
		urlBg = {
			bg1
		}
		/> <
		Layout title = "This is title"
		description = "This is Description"
		colorBg = "red" /
		>
		<
		Layout title = "This is title"
		description = "This is Description"
		urlBg = {
			bg1
		}
		/> <
		Footer / >
		<
		/div>
	);
};

ReactDOM.render( < App / > , document.getElementById("root"));