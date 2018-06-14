import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: null,
			channels: {
				general: new Channel('general', 'General chat', 0),
				random: new Channel('random', 'Talk about anything you want!', 1),
			},
		};
		this.state.current = this.state.channels.general;
	}
	switchChannel = channel => {
		this.setState({current: channel});
	}
	render() {
		return (
			<div className="Main" style={styles}>
				<Sidebar 
					user={this.props.user} 
					logOut={this.props.logOut} 
					channels={this.state.channels} 
					switchChannel={this.switchChannel}
				/>	
				<Chat 
					user={this.props.user} 
					logIn={this.props.logIn} 
					channel={this.state.current}
				/>
			</div>
		);
	}
}

function Channel(name, description, id) {
	this.name = name;
	this.description = description;
	this.id = id;
}
Channel.prototype.endpoint = function() {
	return `${this.name}/messages`;
}

const styles = {
	display: 'flex',
	alignItems: 'stretch',
	height: '100vh'
};

export default Main;
