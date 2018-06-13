import React, { Component } from 'react';

class SignIn extends Component {
	state = {
		username: '',
		email: '',
		uid: null,
	};
	handleEmailChange = ev => {
		this.setState({
			email: ev.target.value
		});
	};
	handleUsernameChange = ev => {
		this.setState({
			username: ev.target.value,
		});
	};
	handleSubmit = ev => {
		ev.preventDefault();
		this.props.logIn({
			uid: 10909, /*TODO: Generate UIDs in a smarter way*/
			username: this.state.username,
			email: this.state.email,
		});
	}
	render() {
		return (
			<div>
				<h1>You are not logged in.</h1>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="email" 
						placeholder="Email address" 
						name="email" 
						value={this.state.email}
						onChange={this.handleEmailChange}
					/>
					<input 
						type="text" 
						placeholder="Username" 
						name="username" 
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
					<input type="submit" value="Log In"/>
				</form>
			</div>
		);
	}
}

export default SignIn;
