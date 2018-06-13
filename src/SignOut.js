import React from 'react';

function SignOut(props) {
	const styles = {
		a: {
			border: '0',
			padding: '0',
			backgroundColor: 'transparent',
			color: 'rgba(255, 255, 255, 0.6)',
			fontSize: '1.2rem',
			transition: 'color 0.25s ease-out',
		},
	};

	return (
		<a 
			href="#"
			style={styles.a}
			onMouseEnter={this.handleEnter}
			onMouseLeave={this.handleExit}
			onClick={this.props.logOut}
		>
			<i className="fas fa-sign-out-alt"></i>
		</a>

	);
}

export default SignOut;
