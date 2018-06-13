import React, { Component } from 'react';
import Main from './Main';
import SignIn from './SignIn';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				uid: '921379',
				username: 'DONUT235',
				avatarURL: 'https://api.adorable.io/avatars/32/davey@getfretless.com', 
			}
		}
	}
	logOut = ev => {
		this.setState({
			user: {
				uid: this.state.user.uid,
				username: '',
			}
		});
	};
	logIn = ev => {
		ev.preventDefault();
		this.setState({
			user: {
				uid: this.state.user.uid,
				username: ev.target.username.value,
				avatarURL: 'https://api.adorable.io/avatars/32/davey@getfretless.com', 
			}
		});
	};
	render() {
		if(this.state.user.username !== '') {
			return (
				<div className="App">
					<Main 
						user={this.state.user}
						logIn={this.logIn}
						logOut={this.logOut}
					/>
				</div>
			);
		} else {
			return (
				<SignIn logIn={this.logIn}/>
			);
		}
	}
}

export default App;
