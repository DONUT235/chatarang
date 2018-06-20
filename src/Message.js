import React, { Component } from 'react';
import Avatar from './Avatar';
import { StyleSheet, css } from 'aphrodite';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class Message extends Component {
	state = {
		showPicker: false,
	}
	togglePicker = () => {
		this.setState({showPicker: !this.state.showPicker});
	}
	render() {
		return (
			<div className={`Message ${css(styles.Message)}`}>
				<Avatar
					className="Avatar"
					URL={this.props.message.user.avatarURL}
				/>
				<div className={css(styles.details)}>
					<div className="Metadata" style={styles.Metadata}>
						<div className={css(styles.user)}>{this.props.message.user.username}</div>
						<div className={css(styles.time)}>{this.props.message.time}</div>
					</div>
					<div>
						{this.props.message.body}
					</div>
					<button 
						className={css(styles.reactionButton)}
						onClick={this.togglePicker}
					>
						<i className="far fa-smile"></i>
					</button>
				</div>
				{
					this.state.showPicker
						?<Picker showPreview={false} />
						:null
				}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	reactionButton: {
		border: 0,
		outline: 0,
		backgroundColor: 'transparent',
		padding: 0,
		color: '#ccc',
		fontSize: '1rem',
		position: 'absolute',
		top: '0.5rem',
		right: '0.5rem',
		cursor: 'pointer',
	},
	Message: {
		display: 'flex',
		marginTop: '1rem',
		padding: '0 1rem',
		position: 'relative',
	},

	details: {
		flex: '1',
		paddingLeft: '0.5rem',
	},

	Metadata: {
		display: 'flex',
		alignItems: 'baseline',
	},

	user: {
		fontWeight: 'bold',
		marginRight: '0.5rem',
	},

	time: {
		color: '#999',
		fontSize: '0.8rem',
	},
});

export default Message;
