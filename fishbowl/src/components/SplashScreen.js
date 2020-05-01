import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from 'react-bootstrap/Button';

function SplashScreen() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<Button variant="success">Start</Button>
			</header>
		</div>
	);
}

export default SplashScreen;