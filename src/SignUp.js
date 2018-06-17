import React, { Component } from 'react';
import { auth } from './base';

class SignUp extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		errorMessage: ''
	}
	handleChange(field) {
		return ev =>  {
			let o = {};
			o[field] = ev.target.value;
			this.setState(o);
		}
	};
	addAccount = ev => {
		ev.preventDefault();
		if(this.state.password !== this.state.confirmPassword) {
			this.setState({errorMessage: 'The two passwords you typed do not match.'});
		} else if(this.state.password.length === 0) {
			this.setState({errorMessage: 'Your account must have a password.'});
		} else if(this.state.email.length === 0) {
			this.setState({errorMessage: 'You must provide an email address.'});
		} else {
			this.props.unsub();
			auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(
				user => {
					if(this.state.username) {
						//dear god it looks like LISP
						user.updateProfile({displayName: this.state.username}).then(() => {
							this.props.logIn({
								username: this.state.username,
								email: user.email,
								uid: user.uid,
							});
							this.props.sub();
						});
					} else {
						this.props.sub();
					}
				},
				error => {
					if(error.code === 'auth/email-already-in-use') {
						this.setState({errorMessage: 'That email address is already in use.'});
					} else if(error.code === 'auth/invalid-email') {
						this.setState({errorMessage: 'The email address you provided is invalid.'});
					} else if(error.code === 'auth/weak-password') {
						this.setState({errorMessage: 'The password you provided is too short.'});
					}
					else {
						this.setState({errorMessage: 'It looks like something went wrong on our end. Sorry!'});
					}
				}
			);	
		}
	}
	render() {
		return (
			<div>
				<h1>Create a new Slacc account!</h1>
				<form onSubmit={this.addAccount}>
					<p>
						<label>What should we call you?</label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange('username')}
						/>
					</p>
					<p>
						<label>Email address: </label>
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange('email')}
						/>
					</p>
					<p>
						<label>Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange('password')}
						/>
					</p>
					<p>
						<label>Confirm password: </label>
						<input
							type="password"
							name="confirmPassword"
							value={this.state.confirmPassword}
							onChange={this.handleChange('confirmPassword')}
						/>
					</p>
					<input type="submit" value="Create account"/>
					<button onClick={this.props.toggleSignUp}>Cancel</button>
				</form>
				<p>{this.state.errorMessage}</p>
			</div>
		);
	}
}

export default SignUp;
