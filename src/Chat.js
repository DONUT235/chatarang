import React, { Component } from 'react';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import base from './base';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {messages: []};
		this.uid = 0;
	}
	render() {
		return (
			<main className="Chat" style={styles.Chat}>
				<ChatHeader channelName="#general" channelDescription="General chat"/>
				<MessageList 
					messages={this.state.messages}
					channelName="#general" 
					channelDescription="General chat"
				/>
				<MessageForm addMessage={this.addMessage}/>
			</main>
		);
	}
	componentWillMount() {
		base.syncState('messages', {
			context: this, 
			state: 'messages', 
			asArray: true, 
		});
	}
	getUid() {
		return this.uid++;
	}
	addMessage = newMessage => {
		const newMessageObject = {body: newMessage};
		newMessageObject.id = this.getUid();
		newMessageObject.user = this.props.user;
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
