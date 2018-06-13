import React from 'react';
import Message from './Message';

function MessageList(props) {
	return (
		<div className="MessageList" style={styles.MessageList}>
			<div style={styles.roomAnnouncement}>
				<h3 style={styles.h3}>{props.channelName}</h3>
				<p>This is the very beginning of the {props.channelName} room.</p>
			</div>
			{props.messages.map(message => <Message key={message.id} message={message} />)}
		</div>
	);
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
