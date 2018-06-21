import React, { Component } from 'react';
import Avatar from './Avatar';
import { StyleSheet, css } from 'aphrodite';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji, Picker } from 'emoji-mart';

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
					<div className={css(styles.emojiContainer)}>
						{
							this.props.message.reactions
								?this.props.message.reactions.map(reaction => (
									<div 
										onClick={
											() => this.props.toggleReaction(
												this.props.index, 
												this.props.user.uid
											)(reaction)
										}
										key={reaction.id}
										className={css(styles.emoji)}
									>
										<Emoji 
											emoji={{id: reaction.id}} 
											size={16}
										/>
										{reaction.count}
									</div>
								))
								:null
						}
					</div>
				</div>
				{
					this.state.showPicker
						?<Picker 
							showPreview={false} 
							style={pickerStyle} 
							onSelect={this.props.toggleReaction(this.props.index, this.props.user.uid)}
						/>
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
		':hover': {
			color: '#3366ff',
		},
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

	emojiContainer: {
		display: 'flex',
	},

	emoji: {
		borderRadius: '3px',
		border: '1px solid rgba(0,0,0,0.4)',
		cursor: 'pointer',
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

const pickerStyle = {
	position: 'absolute',
	right: '2rem',
}

export default Message;
