import React, { Component } from 'react';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {messages: [
			{username: 'foo', body: 'bar', id: 1},
			{username: 'baz', body: 'qux', id: 2},
		]};
	}
	render() {
		return (
			<div className="chat">
				<ChatHeader />
				<MessageList messages={this.state.messages}/>
				<MessageForm />
			</div>
		);
	}
}

export default Chat;
