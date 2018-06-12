import React from 'react';

function Message(props) {
	return (
		<div className="Message" key={props.message.id}>
			{props.message.username}: {props.message.body};
		</div>
	);
}

export default Message;
