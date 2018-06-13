import React, { Component } from 'react';

class SignIn extends Component {
	state = {
		username: '',
		email: '',
		uid: null,
	};
	handleChange(field) {
		return ev =>  {
			let o = {};
			o[field] = ev.target.value;
			this.setState(o);
		}
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
						onChange={this.handleChange('email')}
					/>
					<input 
						type="text" 
						placeholder="Username" 
						name="username" 
						value={this.state.username}
						onChange={this.handleChange('username')}
					/>
					<input type="submit" value="Log In"/>
				</form>
			</div>
		);
	}
}

/*TODO: Style the login page!!!!*/

export default SignIn;
