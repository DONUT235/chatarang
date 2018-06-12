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
		this.uid = 3;
	}
	render() {
		return (
			<div className="chat">
				<ChatHeader />
				<MessageList messages={this.state.messages}/>
				<MessageForm addMessage={this.addMessage}/>
			</div>
		);
	}
	getUid() {
		return this.uid++;
	}
	addMessage = newMessage => {
		const newMessageObject = {body: newMessage};
		newMessageObject.id = this.getUid();
		newMessageObject.username = this.props.user.username;
		this.setState({messages: this.state.messages.concat([newMessageObject])});
	};
}

export default Chat;
