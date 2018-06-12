import React, { Component } from 'react';

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {messageBody: ''};
	}
	handleSubmit = ev => {
		ev.preventDefault();
		this.props.addMessage(this.state.messageBody); 
		this.setState({messageBody: ''});
	}
	handleInput = ev => {
		this.setState({messageBody: ev.target.value});
	}

	render() {
		return (
			<form className="MessageForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="body"
					placeholder="Type a message..."
					value={this.state.messageBody}
					onChange={this.handleInput}
				/>
				<input type="submit" value="Send" />
			</form>
		);
	}
}

export default MessageForm;
