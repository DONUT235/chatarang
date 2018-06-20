import React, { Component } from 'react';
import Main from './Main';
import SignIn from './SignIn';
import './App.css';
import base, { auth } from './base';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'firebase/auth';
import firebase from 'firebase/app';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: '',
				username: '',
				uid:  null,
				avatarURL: '',
			},
			allUsers: {},
		}
		this.sub();
		auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
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
	componentDidMount() {
		base.syncState(
			'users',
			{
				context: this,
				state: 'allUsers'
			}
		);
	}
	logOut = ev => {
		auth.signOut().then(() => {
			this.setState({
				user: {
					email: '',
					username: '',
					uid: null,
					avatarURL: '',
				}
			});
			localStorage.removeItem('user');
		});
	};
	logIn = user => {
		const allUsers = {...this.state.allUsers};
		const newUser = {
			username: user.displayName ? user.displayName : user.email,
			email: user.email,
			uid: user.uid,
			avatarURL: user.photoURL ? user.photoURL : `https://api.adorable.io/avatars/32/${user.email}`
		};
		allUsers[user.uid] = newUser;
		this.setState({user: newUser, allUsers: allUsers});
	};
	isLoggedIn = () => {
		return this.state.user.uid != null;
	}
	render() {
		return (
			<div className="App">
					<Switch>
						<Route path="/rooms/:roomName/" render={navProps => (
							this.isLoggedIn()
								?<Main 
									user={this.state.user}
									logOut={this.logOut}
									allUsers={this.state.allUsers}
									{...navProps}
								/>
								:<Redirect to={`/login/redirect=${navProps.match.params.roomName}`}/>
						)}/>
						<Route path="/login/:redirectString?" render={navProps => (
							this.isLoggedIn()
								?<Redirect 
									from="/login/:redirectString" 
									to={
										(/redirect=.+/).test(navProps.match.params.redirectString)
											?`/rooms/${navProps.match.params.redirectString.slice(9)}/`
											:'/rooms/general/'
									}
								/>
								:<SignIn 
									logIn={this.logIn} 
									unsub={this.unsub}
									sub={this.sub}
									{...navProps}
								/>
						)}/>
						<Route render={navProps => (
							<Redirect 
								to={
									this.isLoggedIn()
										?'/rooms/general/'
										:'/login/'
								}
							/>
						)}/>
					</Switch>
			</div>
		);
	}
}

export default App;
