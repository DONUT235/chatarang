import React, { Component } from 'react';

class SignIn extends Component {
	render() {
		return (
			<div>
				<h1>You are not logged in.</h1>
				<form onSubmit={this.props.logIn}>
					<input type="text" placeholder="Username" name="username"/>
					<input type="submit" value="Log In"/>
				</form>
			</div>
		);
	}
}

export default SignIn;
