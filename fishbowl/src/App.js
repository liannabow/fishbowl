import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SplashScreen from './components/SplashScreen';
import TeamSignup from './components/TeamSignup';
import TimingSettings from './components/TimingSettings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamOne: [],
      teamTwo: []
    }

    this.handleTeamChange = this.handleTeamChange.bind(this);
  }

  handleTeamChange(playerName) {
    this.setState((state, props) => ({
      teamOne: state.teamOne.concat(playerName)
    }));
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={SplashScreen}/>
        <Route
          path="/TeamSignup"
          render={props => <TeamSignup {...props}
            teamOne={this.state.teamOne}
            onTeamChange={this.handleTeamChange}
          />}/>
        <Route path="/Timing" component={TimingSettings}/>
      </Switch>
    );
  }
  
}

export default App;
