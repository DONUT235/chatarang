import React from 'react';

function MessageForm(props) {
	return (
		<form className="MessageForm">
			<input
				type="text"
				name="body"
				placeholder="Type a message..."
			/>
			<input type="submit" value="Send" />
		</form>
	);
}

export default MessageForm;
