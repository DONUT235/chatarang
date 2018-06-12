import React, { Component } from 'react';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList';

class Chat extends Component {
	render() {
		return (
			<div className="chat">
				<ChatHeader />
				<MessageList />
			</div>
		);
	}
}

export default Chat;
