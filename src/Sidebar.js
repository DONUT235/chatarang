import React from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList.js';
import RoomForm from './RoomForm';
import { Route, Switch } from 'react-router-dom';

function Sidebar(props) {
	return (
		<div className="Sidebar">
			<aside style={styles.Sidebar}>
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
							<h1 style={{...styles.h1, ...styles.children}}>XTBC 18</h1>
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
