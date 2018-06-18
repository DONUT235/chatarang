import React, { Component } from 'react';
import Main from './Main';
import SignIn from './SignIn';
import './App.css';
import { auth } from './base';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: '',
				username: '',
				uid:  null,
			},
		}
		this.sub();
	}
	sub = () => {
		this.unsub = auth.onAuthStateChanged(user => {
			if(user) {
				this.logIn(user);
			} else {
				this.logOut();
			}
		});
	}
	logOut = ev => {
		auth.signOut().then(() => {
			this.setState({
				user: {
					email: '',
					username: '',
				}
			});
			localStorage.removeItem('user');
		});
	};
	logIn = user => {
		this.setState({
			user: {
				username: user.displayName ? user.displayName : user.email,
				email: user.email,
				uid: user.uid,
			}
		});
	};
	render() {
		return (
			<div className="App">
				{
					this.state.loading
						?'Loading...'
						:(
							this.state.user.username !== ''
								?<Main 
									user={this.state.user}
									logIn={this.logIn}
									logOut={this.logOut}
								/>
							:<SignIn 
								logIn={this.logIn} 
								unsub={this.unsub}
								sub={this.sub}
							/>
						)
				}
			</div>
		);
	}
}

export default App;
