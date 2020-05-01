import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SplashScreen() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<Link to="/TeamSignup">
					<Button variant="success">
						Start
					</Button>
				</Link>
			</header>
		</div>
	);
}

export default SplashScreen;