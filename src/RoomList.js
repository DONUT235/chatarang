import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

function RoomList(props) {
	return (
		<nav className={`RoomList ${css(styles.RoomList)}`}>
			<ul className={css(styles.ul)}>
				{Object.keys(props.channels).map(name => {
					const channel = props.channels[name];
					return (
						<li className={css(styles.li)} key={channel.name}>
							<Link
								className={css(styles.liA)} 
								to={`/rooms/${encodeURIComponent(channel.name)}/`}
							>
								{channel.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

const styles = StyleSheet.create({
	RoomList: {
		padding: '0 1rem',
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
