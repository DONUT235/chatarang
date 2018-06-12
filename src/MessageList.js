import React from 'react';

function MessageList() {
	const messages = [
		{username: 'foo', body: 'bar', id: 1},
		{username: 'baz', body: 'qux', id: 2}
	];
	return (
		<div className="MessageList">
			{messages.map(message => (
				<div key={message.id}>
					{message.username}: {message.body}
				</div>
			))}
		</div>
	);
}

export default MessageList;
