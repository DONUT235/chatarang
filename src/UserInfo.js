import React, { Component } from 'react';
import Avatar from './Avatar';
import SignOut from './SignOut';

class UserInfo extends Component {
	render() {
		return (
			<div className="UserInfo" style={styles.UserInfo}>
				<Avatar
					className="Avatar"
					avatarURL={this.props.user.avatarURL}
				/>
				<div className="user" style={styles.user}>{this.props.user.username}</div>
				<SignOut logOut={this.props.logOut}/>
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
