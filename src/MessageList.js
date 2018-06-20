import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
	scrollToBottom() {
		this.messagesEnd.scrollIntoView({behavior: 'smooth'});
	}
	componentDidUpdate(prevProps) {
		if(this.props.messages.length > prevProps.messages.length) {
			this.scrollToBottom();
		}
	}
	render() {
		return (
			<div className="MessageList" style={styles.MessageList}>
				<div style={styles.roomAnnouncement}>
					<h3 style={styles.h3}>#{this.props.channelName}</h3>
					<p>This is the very beginning of the #{this.props.channelName} room.</p>
				</div>
				{this.props.messages.map(message => <Message key={message.id} message={message}/>)}
				<div id="messageBottom" ref={el=>this.messagesEnd = el}></div>
			</div>
		);
	}
}

const styles = {
	MessageList: {
	  backgroundColor: 'white',
	  flex: '1',
	  paddingBottom: '1rem',
	  overflowY: 'scroll',
	},

	roomAnnouncement: {
	  padding: '2rem 1rem',
	},

	h3: {
	  fontSize: '1.5rem',
	},
};

export default MessageList;
