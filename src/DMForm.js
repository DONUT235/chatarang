import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class RoomForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannel: {
				users: [],
			},
			error: '',
		};
	}
	handleChange = ev => {
			const o = {...this.state.newChannel};
			o[ev.target.name] = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
			this.setState({newChannel: o});
	};
	handleSelectChange = selectedValue => {
		const newChannel = {...this.state.newChannel};
		newChannel.users = selectedValue;
		this.setState({newChannel: newChannel});
	}
	handleSubmit = ev => {
		ev.preventDefault();
		const users = {};
		this.state.newChannel.users.forEach(user => {
			users[user.value] = this.props.allUsers[user.value];
		});
		users[this.props.user.uid] = this.props.user;
		
		const uidArray = Object.keys(users).sort();
		const name = uidArray.join('+');
		if(this.props.allChannels[name]) {
			this.setState({error: 'There is already a DM channel for that set of users'});
			return;
		}
		const description = uidArray.map((uid, index) => {
			let suffix = '';
			if(index < uidArray.length-1) {
				suffix = ' ';
				if(index === uidArray.length-2) {
					suffix = ' and' + suffix;
				}
				if(uidArray.length > 2) {
					suffix = ',' + suffix;
				}
			} else {
				suffix = "'s direct messages";
			}
			return users[uid].username+suffix;
		}).join('');
		this.props.addChannel(
			name,
			description,
			true,
			true,
			users
		);
		this.props.history.goBack();
	};
	userList = () => {
		return Object.keys(this.props.allUsers).map(uid => ({
			label: `${this.props.allUsers[uid].username}`,
			value: uid,
		}));
	}
	goBack = () => {
		this.props.history.push(`/rooms/${this.props.match.params.roomName}/`);
	}
	render() {
		return (
			<div className={`RoomForm ${css(styles.roomForm)}`}>
				<main className={css(styles.main)}>
					<h2 className={css(styles.title)}>Create a new room</h2>
					<form className={css(styles.form)} onSubmit={this.handleSubmit}>
						<div>
							<label
								htmlFor="users"
								className={css(styles.label)}
							>
								Add users
							</label>
							<Select
								name="users"
								multi
								value={this.state.newChannel.users}
								onChange={this.handleSelectChange}
								options={this.userList()}
							/>
						</div>
						<div className={css(styles.buttonContainer)}>
							<button type="submit" className={css(styles.button)}>Create Room</button>
							<button type="button" onClick={this.goBack} className={`${css(styles.button)} ${css(styles.cancel)}`}>Cancel</button>
						</div>
					</form>
					<span className={css(styles.error)}>{this.state.error}</span>
				</main>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	roomForm: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100vw',
		backgroundColor: '#f6f6f6',
		zIndex: '1',
	},

	error: {
		color: 'red',
	},

	title: {
		color: '#ff3344',
		fontWeight: 400,
		lineHeight: '80px',
		fontSize: '2rem',
	},

	main: {
		flex: 1,
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: '0 auto',
		paddingBottom: '3rem',
		width: '40rem',
	},

	form: {
		backgroundColor: 'white',
		boxShadow: '0 1px 1px rgba(0,0,0,.1)',
		marginBottom: '2rem',
		paddingBottom: '2rem',
	},

	label: {
		display: 'block',
		textTransform: 'uppercase',
		color: '#999',
	},

	input: {
		width: '20rem',
		fontSize: '1.5rem',
		border: 0,
		borderBottom: '1px solid black',
		marginTop: '1rem',
		marginBottom: '1rem',
		textAlign: 'center',
		padding: '0.5rem',

		':focus': {
			outline: 0,
		},
	},

	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
	},

	button: {
		display: 'block',
		padding: '1rem',
		margin: '0 1rem',
		fontSize: '1.2rem',
		borderRadius: '1rem',
		backgroundColor: '#ff3333',
		color: 'white',
		width: '10rem',
		cursor: 'pointer',
		outline: 0,
		border: 0,
	},

	cancel: {
		backgroundColor: 'white',
		color: '#666',
	},
})

export default RoomForm;
