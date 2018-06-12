import React from 'react';

function Sidebar(props) {
	return (
		<div className="Sidebar">
			<aside style={styles.Sidebar}>
				<div className="UserInfo" style={styles.children}>
					<div
						className="Avatar"
						style={{background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)'}}
					></div>
					<div className="user">{props.user.username}</div>
					<a href="#">
						<i className="fas fa-sign-out-alt"></i>
					</a>
				</div>
				<h1 style={[styles.h1, styles.children]}>XTBC 18</h1>
				<nav className="RoomList" style={styles.children}>
					<h2>Rooms</h2>
					<ul>
						<li><a href="#">general</a></li>
						<li><a href="#">random</a></li>
					</ul>
				</nav>
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
