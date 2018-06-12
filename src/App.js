import React, { Component } from 'react';
import Main from './Main.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				uid: '921379',
				username: 'DONUT235',
			}
		}
	}
	render() {
		return (
			<div className="App">
				<Main user={this.state.user}/>
			</div>
		);
	}
}

export default App;
