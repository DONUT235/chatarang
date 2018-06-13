import React, { Component } from 'react';
import Avatar from './Avatar';

class UserInfo extends Component {
	constructor(props) {
		super(props);
	}
	handleEnter(ev) {
		ev.target.style.color = 'white';
	}
	handleExit(ev) {
		ev.target.style.color = 'rgba(255, 255, 255, 0.6)';
	}
	
	render() {
		return (
			<div className="UserInfo" style={styles.UserInfo}>
				<Avatar
					className="Avatar"
					avatarURL={this.props.user.avatarURL}
				/>
				<div className="user" style={styles.user}>{this.props.user.username}</div>
			</div>
		);
	}
}

const styles = {
	UserInfo: {
		marginBottom: '1rem',
		display: 'flex',
		alignItems: 'center',
		padding: '0 1rem',
	},
	user: {
		flex: '1',
	},
};

export default UserInfo;
