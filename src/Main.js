import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'

class Main extends Component {
	render() {
		return (
			<div className="Main" style={styles}>
				<Sidebar />	
				<Chat />
			</div>
		);
	}
}

const styles = {
	display: 'flex',
	alignItems: 'stretch',
	height: '100vh'
};

export default Main;
