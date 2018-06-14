import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function RoomList(props) {
	return (
		<nav className={`RoomList $css(styles.RoomList)`}>
			<h2 className={css(styles.h2)}>Rooms</h2>
			<ul className={css(styles.ul)}>
				{props.channels.map((channel, i) => (
					<li className={css(styles.li)} key={channel.id}>
						<a 
							className={css(styles.liA)} 
							href="#" 
							onClick={ev=>props.switchChannel(channel)}
						>
							{channel.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

const styles = StyleSheet.create({
	RoomList: {
		padding: '0 1rem',
	},
	
	h2: {
		fontSize: '1rem',
	},

	ul: {
		listStyle: 'none',
		marginLeft: '0',
		paddingLeft: '0',
	},
	
	li: {
		marginBottom: '0.5rem',
	},

	liA: {
		'::before': {
			content: "'# '",
		},
		':hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
		},
		display: 'block',
		color: 'whitesmoke',
		textDecoration: 'none',
	},
});
export default RoomList;
