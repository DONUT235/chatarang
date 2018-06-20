import React from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList.js';
import RoomForm from './RoomForm';
import { Route, Switch, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

function Sidebar(props) {
	return (
		<div className="Sidebar">
			<aside className={css(styles.Sidebar)}>
				<Switch>
					<Route path="/rooms/:roomName/newChannel/" render={navProps => (
						<RoomForm 
							addChannel={props.addChannel}		
							allUsers={props.allUsers}
							user={props.user}
							allChannels={props.allChannels}
							{...navProps}
						/>
					)}/>
					<Route render={navProps => (
						<div>
							<UserInfo 
								user={props.user} 
								logOut={props.logOut}
							/>
							<h1 className={`${css(styles.children)} ${css(styles.h1)}`}>XTBC 18</h1>
							<div className={css(styles.heading)}>
								<h2 className={css(styles.h2)}>Rooms</h2>
								<Link className={css(styles.button)} to="newChannel/">
									<i className="fas fa-plus-circle" title="Add room"></i>
								</Link>
							</div>
							<RoomList 
								channels={props.legalChannels} 
								switchChannel={props.switchChannel}
								addChannel={props.addChannel}
								history={props.history}
								user={props.user}
							/>
						</div>
					)}/>
				</Switch>
			</aside>
		</div>
	);
}
const styles = StyleSheet.create({
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
});
export default Sidebar;
