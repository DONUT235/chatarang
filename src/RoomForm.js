import React, { Component } from 'react';

class RoomForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
		};
	}
	handleChange = name => (
		ev => {
			const o = {};
			o[name] = ev.target.value;
			this.setState(o);
		}
	);
	handleSubmit = ev => {
		ev.preventDefault();
		this.props.addChannel(
			ev.target.name.value,
			ev.target.description.value
		);
		this.props.toggleForm();
	};
	render() {
		return (
			<div className="RoomForm">
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>Room name</label>
						<input type="text" name="name"/>
					</p>
					<p>
						<label>Description</label>
						<input type="text" name="description"/>
					</p>
					<div>
						<button type="button" onClick={this.props.toggleForm}>Cancel</button>
						<button type="submit">Create Room</button>
					</div>
				</form>
			</div>
		);
	}
}

export default RoomForm;
