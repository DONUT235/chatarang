import React, { Component } from 'react';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.AvatarStyle = {
			marginRight: '0.5rem',
			height: '40px',
			width: '40px',
			fontSize: '1rem',
			borderRadius: '20px',
			background: `url(${this.props.user.avatarURL})`
		}
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
				<div
					className="Avatar"
					style={this.AvatarStyle}
				></div>
				<div className="user" style={styles.user}>{this.props.user.username}</div>
				<a 
					href="#"
					style={styles.a}
					onMouseEnter={this.handleEnter}
					onMouseLeave={this.handleExit}
					onClick={this.props.logOut}
				>
					<i className="fas fa-sign-out-alt"></i>
				</a>
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
	Avatar: {
		marginRight: '0.5rem',
		height: '40px',
		width: '40px',
		fontSize: '1rem',
		borderRadius: '20px',
	},
	user: {
		flex: '1',
	},
	a: {
		border: '0',
		padding: '0',
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.6)',
		fontSize: '1.2rem',
		transition: 'color 0.25s ease-out',
	},
};

export default UserInfo;
