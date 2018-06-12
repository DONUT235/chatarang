import React from 'react';
import Message from './Message';

function MessageList() {
	const messages = [
		{username: 'foo', body: 'bar', id: 1},
		{username: 'baz', body: 'qux', id: 2}
	];
	return (
		<div className="MessageList">
			{messages.map(message => <Message message={message} />)}
		</div>
	);
}

export default MessageList;
