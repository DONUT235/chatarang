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
		this.ref = base.syncState(this.props.channel.endpoint(), {
			context: this,
			state: 'messages',
			asArray: true,
		});
	}
	render() {
		return (
			<main className="Chat" style={styles.Chat}>
				<ChatHeader 
					channel={this.props.channel} 
				/>
				<MessageList 
					messages={this.state.messages}
					channelName={this.props.channel.name} 
				/>
				<MessageForm addMessage={this.addMessage}/>
			</main>
		);
	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}
	getUid() {
		this.setState({uid: this.state.uid+1});
		return this.state.uid;
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
