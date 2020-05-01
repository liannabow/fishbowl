import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SplashScreen from './components/SplashScreen';
import TeamSignup from './components/TeamSignup';

function App() {
  return (
    <Switch>
      <Route path="/" component={SplashScreen}/>
      <Route path="/TeamSignup" component={TeamSignup}/>
    </Switch>
  );
}

export default App;
