import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

function RoomList(props) {
	return (
		<nav className={`RoomList $css(styles.RoomList)`}>
			<div className={css(styles.heading)}>
				<h2 className={css(styles.h2)}>Rooms</h2>
				<Link className={css(styles.button)} to="newChannel/">
					<i className="fas fa-plus-circle" title="Add room"></i>
				</Link>
			</div>
			<ul className={css(styles.ul)}>
				{Object.keys(props.channels).map(name => {
					const channel = props.channels[name];
					return (
						channel && (!channel.isPrivate || channel.users[props.user.uid])
							?<li className={css(styles.li)} key={channel.name}>
								<Link
									className={css(styles.liA)} 
									to={`/rooms/${encodeURIComponent(channel.name)}/`}
								>
									{channel.name}
								</Link>
							</li>
							:null
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
	
	h2: {
		fontSize: '1rem',
	},

	heading: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	button: {
		border: 0,
		backgroundColor: 'transparent',
		outline: 0,
		paddingLeft: 10,
		fontSize: '1rem',
		color: 'rgba(255,255,255, 0.4)',
		cursor: 'pointer',
		transition: 'color 0.25s ease-out',

		':hover': {
			color: 'white',
		}
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
