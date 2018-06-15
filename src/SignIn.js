import React, { Component } from 'react';
import { auth, googleProvider } from './base';
import SignUp from './SignUp';

class SignIn extends Component {
	state = {
		username: '',
		email: '',
		uid: null,
		signUp: false,
		password: '',
		confirmPassword: ''
	};
	handleChange(field) {
		return ev =>  {
			let o = {};
			o[field] = ev.target.value;
			this.setState(o);
		}
	};
	passwordAuthenticate = ev => {
		//TODO: Do stuff
	}
	googleAuthenticate = () => {
		auth.signInWithPopup(googleProvider).then(result => {
			console.log(result.user);
			//this.props.logIn(result.user);
		});
	};
	toggleSignUp = () => this.setState({signUp: !this.state.signUp});
	render() {
		if(this.state.signUp) {
			return (
				<SignUp 
					toggleSignUp={this.toggleSignUp} 
					logIn={this.props.logIn}
					unsub={this.props.unsub}
					sub={this.props.sub}
				/>
			)
		} else {
				return (
				<div className="SignIn">
					<h1>You are not logged in.</h1>
					<form onSubmit={this.passwordAuthenticate}>
						<input 
							type="email" 
							placeholder="Email address" 
							name="email" 
							value={this.state.email}
							onChange={this.handleChange('email')}
						/>
						<input 
							type="password" 
							placeholder="Password" 
							name="password" 
							value={this.state.password}
							onChange={this.handleChange('password')}
						/>
						<input type="submit" value="Log In"/>
					</form>
					<button onClick={()=>this.googleAuthenticate()}>
						<i className="fab fa-google"></i>
						Sign in with Google
					</button>
					
					<div>Can't do that? Create an account!</div>
					<button onClick={this.toggleSignUp}>Sign up for Slacc</button>
				</div>
			);
		}
	}
}

/*TODO: Style the login page!!!!*/

export default SignIn;
