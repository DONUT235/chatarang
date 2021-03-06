import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class RoomForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannel: {
				name: '',
				description: '',
				isPrivate: false,
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
		if(this.props.allChannels[this.state.newChannel.name]) {
			this.setState({error: 'That channel already exists.'});
			return;
		}
		if((/^[^[\].$#/]+$/).test(this.state.newChannel.name)) {
			this.props.addChannel(
				this.state.newChannel.name,
				this.state.newChannel.description,
				this.state.newChannel.isPrivate,
				false,
				users
			);
			this.props.history.goBack();
		} else if(this.state.newChannel.name.length > 0) {
			this.setState({error: 'Room names may not contain [].$#/'});
		} else {
			this.setState({error: 'Room name must not be empty'});
		}
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
						<p>
							<label className={css(styles.label)}>
								<input 
									type="checkbox" 
									name="isPrivate" 
									checked={this.state.newChannel.isPrivate}
									onChange={this.handleChange}
								/>
									Private room
							</label>
						</p>
						{
							this.state.newChannel.isPrivate
								?<div>
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
								:null
						}
						<p>
							<label className={css(styles.label)} htmlFor="name">Room name</label>
							<input type="text" name="name" onChange={this.handleChange}/>
						</p>
						<p>
							<label className={css(styles.label)} htmlFor="description">Description</label>
							<input type="text" name="description" onChange={this.handleChange}/>
						</p>
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
		border: '1px solid black',
	},

	cancel: {
		backgroundColor: 'white',
		color: '#666',
	},
})

export default RoomForm;
