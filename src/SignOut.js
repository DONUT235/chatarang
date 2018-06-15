import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { auth } from './base'; 

function SignOut(props) {
	const styles = StyleSheet.create({
		button: {
			border: '0',
			padding: '0',
			backgroundColor: 'transparent',
			color: 'rgba(255, 255, 255, 0.6)',
			fontSize: '1.2rem',
			transition: 'color 0.25s ease-out',
			':hover': {
				color: 'white',
			}
		},
	});

	return (
		<button 
			href="#"
			className={css(styles.button)}
			onClick={() => auth.signOut()}
		>
			<i className="fas fa-sign-out-alt"></i>
		</button>

	);
}

export default SignOut;
