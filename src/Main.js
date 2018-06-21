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
		this.state.current = new Channel('', '');
	}
	addChannel = (name, description, isPrivate, isDM, users) => {
		const newChannels = {...this.state.channels}
		newChannels[name] = new Channel(name, description, isPrivate, isDM, users);
		this.setState({channels: newChannels});
	}
	removeChannel = channel => {
		const channels = {...this.state.channels};
		channels[channel.name] = null;
		this.setState(
			{channels: channels},
			this.loadValidChannel
		);
	}
	loadValidChannel = () => {
		const legalChannels = this.legalChannels()
		if(legalChannels.length > 0) {
			this.props.history.push('/rooms/'+encodeURIComponent(legalChannels[0].name)+'/');
		} else {
			this.setState(
				{channels: {general: new Channel('general', 'General chat')}},
				() => this.props.history.push('/rooms/general/')
			);
		}
	}
	switchChannel = roomName => {
		const decodedName = decodeURIComponent(roomName);
		if(this.state.channels[decodedName] != undefined) {
			this.setState({current: this.state.channels[decodedName]});
		} else {
			this.loadValidChannel();
		}
	};
	legalChannels = () => {
		return Object.keys(this.state.channels).filter(channel => (
			this.hasAccess(this.state.channels[channel])
		)).map(channel => this.state.channels[channel]);
	};
	channelCategories = () => {
		const legalChannels = this.legalChannels();
		const legalDMs = [];
		const legalNonDMs = [];
		legalChannels.forEach(channel => {
			if(channel.dm) {
				legalDMs.push(channel);
			} else {
				legalNonDMs.push(channel);
			}
		});
		return {
			all: this.state.channels,
			legal: legalChannels,
			legalDMs: legalDMs,
			legalNonDMs: legalNonDMs,
		};
	};
	hasAccess = channel => {
		return channel && (!channel.isPrivate || channel.users[this.props.user.uid]);
	};
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
					addChannel={this.addChannel}
					history={this.props.history}
					allUsers={this.props.allUsers}
					channelCategories={this.channelCategories()}
				/>
				<Chat 
					user={this.props.user} 
					channel={this.state.current}
					removeChannel={this.removeChannel}
					loadValidChannel={this.loadValidChannel}
				/>
			</div>
		);
	}
}

function Channel(name, description, isPrivate, isDM, users) {
	this.name = name;
	this.description = description;
	if(isPrivate) {
		this.isPrivate = true;
		this.dm = isDM;
		this.users = users;
	} else {
		this.dm = false;
		this.isPrivate = false;
		this.users = {};
	}
	if(isDM) {
		this.displayName = Object.keys(users).map(uid => users[uid].username).join(', ');
	} else {
		this.displayName = this.name;
	}
}

const styles = {
	display: 'flex',
	alignItems: 'stretch',
	height: '100vh'
};

export default Main;
