import React from 'react';
import Avatar from './Avatar';

function Message(props) {
	return (
		<div className="Message" style={styles.Message}>
			<Avatar
				className="Avatar"
				email={props.message.user.email}
			/>
			<div style={styles.details}>
				<div className="Metadata" style={styles.Metadata}>
					<div style={styles.user}>{props.message.user.username}</div>
					<div style={styles.time}>{props.message.time.toLocaleString()}</div>
				</div>
				<div>
					{props.message.body}
				</div>
			</div>
		</div>
	);
}

const styles = {
	Message: {
		display: 'flex',
		marginTop: '1rem',
		padding: '0 1rem',
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
}

export default Message;
