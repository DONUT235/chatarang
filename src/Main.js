import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import base from './base';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: null,
			channels: {},
		};
		this.ref = null;
		this.state.current = new Channel('general', 'General chat'); 
	}
	addChannel = (name, description) => {
		const newChannels = {...this.state.channels}
		newChannels[name] = new Channel(name, description);
		this.setState({channels: newChannels});
	}
	switchChannel = channel => {
		this.setState({current: channel});
	}
	componentDidMount() {
		this.ref = base.syncState('channels', {
			context: this,
			state: 'channels',
		});
	}
	render() {
		return (
			<div className="Main" style={styles}>
				<Sidebar 
					user={this.props.user} 
					logOut={this.props.logOut} 
					channels={this.state.channels} 
					switchChannel={this.switchChannel}
					addChannel={this.addChannel}
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

function Channel(name, description) {
	this.name = name;
	this.description = description;
}

const styles = {
	display: 'flex',
	alignItems: 'stretch',
	height: '100vh'
};

export default Main;
