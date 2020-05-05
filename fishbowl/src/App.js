import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SplashScreen from './components/SplashScreen';
import TeamSignup from './components/TeamSignup';
import TimingSettings from './components/TimingSettings';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen}/>
      <Route path="/TeamSignup" component={TeamSignup}/>
      <Route path="/Timing" component={TimingSettings}/>
    </Switch>
  );
}

export default App;
