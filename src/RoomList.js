import React from 'react';
import './roomlist.css';

function RoomList(props) {
	return (
		<nav className="RoomList" style={styles.RoomList}>
			<h2 style={styles.h2}>Rooms</h2>
			<ul style={styles.ul}>
				<li style={styles.li}><a style={styles.liA} href="#">general</a></li>
				<li style={styles.li}><a style={styles.liA} href="#">random</a></li>
			</ul>
		</nav>
	);
}

const styles = {
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
		display: 'block',
		color: 'whitesmoke',
		textDecoration: 'none',
	},
}
export default RoomList;
