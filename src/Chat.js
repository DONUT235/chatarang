import React, { Component } from 'react';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import base from './base';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.state.uid = 0;
		base.syncState('messageIDs', {
			context:this,
			state: 'uid',
		});
	}
	syncMessages() {
		this.ref = base.syncState(`channels/${this.props.channel.name}/messages`, {
			context: this,
			state: 'messages',
			asArray: true,
		});
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.props.channel.isPrivate && !this.props.channel.users[this.props.user.uid]) {
			console.log('foo');
			this.props.loadValidChannel();
		} else if(prevProps.channel !== this.props.channel) {
			base.removeBinding(this.ref);
			this.setState({messages: []});
			this.syncMessages();
		}
	}
	componentDidMount() {
		if(this.props.channel.isPrivate && !this.props.channel.users[this.props.user.uid]) {
			console.log('foo');
			this.props.loadValidChannel();
		} else {
			this.syncMessages();
		}
	}
	render() {
		return (
			<main className="Chat" style={styles.Chat}>
				<div style={styles.Chat}>
					<ChatHeader 
						channel={this.props.channel} 
						removeChannel={this.props.removeChannel}
					/>
					<MessageList 
						messages={this.state.messages}
						channelName={this.props.channel.name} 
					/>
					<MessageForm addMessage={this.addMessage}/>
				</div>
			</main>
		);
	}
	getUid() {
		this.setState({uid: this.state.uid+1});
		return this.state.uid;
	}
	addMessage = newMessage => {
		const newMessageObject = {body: newMessage};
		newMessageObject.id = this.getUid();
		newMessageObject.user = {};
		newMessageObject.user.username = this.props.user.username;
		newMessageObject.user.avatarURL = this.props.user.avatarURL;
		newMessageObject.time = new Date().toLocaleString();
		this.setState({messages: this.state.messages.concat([newMessageObject])});
	};
}

const styles = {
	Chat: {
	  flex: '1',
	  display: 'flex',
	  flexDirection: 'column',
	},
}

export default Chat;
