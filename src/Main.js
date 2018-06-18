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
	switchChannel = roomName => {
		const decodedName = decodeURIComponent(roomName);
		if(this.state.channels[decodedName] != undefined) {
			this.setState({current: this.state.channels[decodedName]});
		} else {
			/*console.log(decodedName);
			console.log(this.state.channels);*/
		}
	}
	componentDidMount() {
		this.ref = base.syncState('channels', {
			context: this,
			state: 'channels',
			then: () => {
				this.switchChannel(this.props.match.params.roomName);
			},
		});
	}
	componentDidUpdate(prevProps) {
		if(prevProps.match.params.roomName !== this.props.match.params.roomName) {
				this.switchChannel(this.props.match.params.roomName);
		}
	}
	render() {
		return (
			<div className="Main" style={styles}>
				<Sidebar 
					user={this.props.user} 
					logOut={this.props.logOut} 
					channels={this.state.channels} 
					addChannel={this.addChannel}
				/>	
				<Chat 
					user={this.props.user} 
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
