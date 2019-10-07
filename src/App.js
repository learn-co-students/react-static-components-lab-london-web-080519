import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';
import { exists } from 'fs';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent/>
				<EinsteinQuoteComponent/>
				<MouseComponent/>
			</div>
		);
	}
}

// class CatComponent extends App {
// 	render() {

// 	}
// }

// class EinsteinQuoteComponent extends App {
// 	render() {

// 	}
// }

// class MouseComponent extends App {
// 	render() {

// 	}
// }

export default App;
