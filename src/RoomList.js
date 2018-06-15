import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import RoomForm from './RoomForm';

class RoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {showForm : false};
	}
	toggleForm = ev => this.setState({showForm: !this.state.showForm});
	render() {
			return (
			<nav className={`RoomList $css(styles.RoomList)`}>
				{
					this.state.showForm
					?<RoomForm toggleForm={this.toggleForm} addChannel={this.props.addChannel}/>
					:<div className={css(styles.heading)}>
						<h2 className={css(styles.h2)}>Rooms</h2>
						<button className={css(styles.button)} onClick={this.toggleForm}>
							<i className="fas fa-plus-circle" title="Add room"></i>
						</button>
					</div>
				}
				<ul className={css(styles.ul)}>
					{Object.keys(this.props.channels).map(name => {
						const channel = this.props.channels[name];
						return (
							<li className={css(styles.li)} key={channel.name}>
								<a 
									className={css(styles.liA)} 
									href="#" 
									onClick={ev=>this.props.switchChannel(channel)}
								>
									{channel.name}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		);
	}
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
