import React, { Component } from 'react';

class SignIn extends Component {
	render() {
		return (
			<form onSubmit={this.props.logIn}>
				<input type="text" placeholder="Username" name="username"/>
				<input type="submit" value="Log In"/>
			</form>
		);
	}
}

export default SignIn;
