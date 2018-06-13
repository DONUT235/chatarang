import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'

class Main extends Component {
	render() {
		return (
			<div className="Main" style={styles}>
				<Sidebar user={this.props.user} logOut={this.props.logOut}/>	
				<Chat user={this.props.user} logIn={this.props.logIn}/>
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
