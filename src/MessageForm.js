import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {messageBody: ''};
	}
	handleSubmit = ev => {
		ev.preventDefault();
		if(this.state.messageBody !== '') {
			this.props.addMessage(this.state.messageBody); 
			this.setState({messageBody: ''});
		}
	}
	handleInput = ev => {
		this.setState({messageBody: ev.target.value});
	}

	render() {
		return (
			<form 
				onSubmit={this.handleSubmit} 
				className={`MessageForm ${css(styles.MessageForm)}`}
			>
				<div className={css(styles.chatIcon)}>
					<i className="fas fa-comment-alt"></i>
				</div>
				<input 
					type="text" 
					placeholder="Type a message..."
					value={this.state.messageBody}
					onChange={this.handleInput}
					className={css(styles.input)}
				/>
				<button type="submit" className={css(styles.button)}>
					<i className="far fa-paper-plane" title="Send"></i>
				</button>
			</form>
		);
	}
}

const styles = StyleSheet.create({
	MessageForm: {
		backgroundColor: 'white',
		height: '3rem',
		display: 'flex',
		alignItems: 'stretch',
		border: '2px solid #999',
		borderRadius: '0.5rem',
		margin: '0.25rem',
		padding: '0',
	},

	chatIcon: {
		display: 'flex',
		borderRadius: '0.5rem',
		alignItems: 'center',
		backgroundColor: 'white',
		color: '#ccc',
		padding: '0 0.5rem',
		fontSize: '1.2rem',
	},

	input: {
		':focus': {
			outline: '0',
		},
		flex: '1',
		fontSize: '1.2rem',
		border: '0',
	},

	button: {
		fontSize: '1.5rem',
		backgroundColor: '#1A8FE3',
		color: 'white',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		borderTopRightRadius: '0.5rem',
		borderBottomRightRadius: '0.5rem',
		border: '1px solid white',
	},
});

export default MessageForm;
