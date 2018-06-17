import React, { Component } from 'react';
import { auth, googleProvider } from './base';
import SignUp from './SignUp';

class SignIn extends Component {
	state = {
		email: '',
		uid: null,
		signUp: false,
		password: '',
		error: '',
	};
	handleChange = ev =>  {
		let o = {};
		o[ev.target.name] = ev.target.value;
		this.setState(o);
	};
	passwordAuthenticate = ev => {
		ev.preventDefault();
		auth.signInWithEmailAndPassword(this.state.email,this.state.password)
		.catch(error => {
			console.log(error);
			this.setState({error: 'Incorrect email or password'})
		});
	}
	googleAuthenticate = () => {
		auth.signInWithPopup(googleProvider).catch(error => {
			if(error.code === 'auth/account-exists-with-different-credential') {
				this.setState({email: error.email});
				this.setState({error: 'Please sign in with the password form above.'});
			} else if(error.code === 'auth/popup-blocked') {
				this.setState({error: 'Please unblock popups to sign in with Google.'});
			}
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
							onChange={this.handleChange}
						/>
						<input 
							type="password" 
							placeholder="Password" 
							name="password" 
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Log In"/>
					</form>
					<button onClick={()=>this.googleAuthenticate()}>
						<i className="fab fa-google"></i>
						Sign in with Google
					</button>
					
					<div>Can't do that? Create an account!</div>
					<button onClick={this.toggleSignUp}>Sign up for Slacc</button>
					<div style={style.error}>{this.state.error}</div>
				</div>
			);
		}
	}
}

/*TODO: Style the login page!!!!*/
const style = {
	error: {
		color: 'red',
	},
}

export default SignIn;
