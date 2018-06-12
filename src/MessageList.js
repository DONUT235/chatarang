import React from 'react';
import Message from './Message';

function MessageList(props) {
	return (
		<div className="MessageList">
			{props.messages.map(message => <Message message={message} />)}
		</div>
	);
}

export default MessageList;
