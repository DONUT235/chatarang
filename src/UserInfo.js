import React from 'react';
import Avatar from './Avatar';
import SignOut from './SignOut';

function UserInfo(props) {
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

	return (
		<div className="UserInfo" style={styles.UserInfo}>
			<Avatar
				className="Avatar"
				email={props.user.email}
			/>
			<div className="user" style={styles.user}>{props.user.username}</div>
			<SignOut logOut={props.logOut}/>
		</div>
	);
}

export default UserInfo;
