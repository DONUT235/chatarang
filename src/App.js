import React, { Component } from 'react';
import Main from './Main';
import SignIn from './SignIn';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				uid: null,
				email: '',
				username: '',
			}
		}
	}
	logOut = ev => {
		this.setState({
			user: {
				uid: this.state.user.uid,
				email: '',
				username: '',
			}
		});
	};
	logIn = user => {
		this.setState({
			user: user
		});
	};
	render() {
		return (
			<div className="App">
				{
					this.state.user.username !== ''
						?<Main 
							user={this.state.user}
							logIn={this.logIn}
							logOut={this.logOut}
						/>
						:<SignIn logIn={this.logIn}/>
				}
			</div>
		);
	}
}

export default App;
