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
				<div className="SignIn" style={style.signIn}>
					<div>
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
						<div style={style.error}>{this.state.error}</div>
						<button onClick={()=>this.googleAuthenticate()} style={style.google}>
							<i className="fab fa-google" style={style.googleIcon}></i>
							Sign in with Google
						</button>
						<p>Don't have an account? Sign up today!</p>
						<button onClick={this.toggleSignUp} style={style.signUp}>Sign up for Slacc</button>
					</div>
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
	signIn: {
		display: 'flex',
		position: 'absolute',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	googleIcon: {
		position: 'relative',
		right: '0.5em',
	},
	google: {
		position: 'relative',
		marginTop: '2rem',
		width: '75%',
		left: '0%',
		marginLeft: '12.5%',
		backgroundColor: 'blue',
		color: 'white',
		borderRadius: '0.5rem',
		height: '2rem',
		border: 0,
	},
	signUp: {
		width: '100%',
		height: '3rem',
		fontSize: '2rem',
		border: 0,
		borderRadius: '2rem',
		color: 'white',
		backgroundColor: 'coral',
	}
}

export default SignIn;
