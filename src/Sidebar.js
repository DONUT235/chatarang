import React from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList.js';

function Sidebar(props) {
	return (
		<div className="Sidebar">
			<aside style={styles.Sidebar}>
				<UserInfo 
					user={props.user} 
					logOut={props.logOut}
				/>
				<h1 style={{...styles.h1, ...styles.children}}>XTBC 18</h1>
				<RoomList />
			</aside>
		</div>
	);
}
const styles = {
	Sidebar: {
		backgroundColor: '#333344',
		color: 'rgba(255, 255, 255, 0.8)',
		width: '12rem',
		padding: '1rem 0',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},

	children: {
		padding: '0 1rem',
	},

	h1: {
		color: 'white',
		fontSize: '1.2rem',
		marginTop: '0',
	},
};
export default Sidebar;
