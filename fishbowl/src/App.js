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
      teamOne: []
    }

    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handleTeamOneUpdate = this.handleTeamOneUpdate.bind(this);
  }

  handleTeamChange(playerName) {
    this.setState((state, props) => ({
      teamOne: state.teamOne.concat(playerName)
    }));
  }

  handleTeamOneUpdate(teamOne) {
    this.setState({teamOne: teamOne});
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
            onTeamOneUpdate={this.handleTeamOneUpdate}
          />}/>
        <Route path="/Timing" component={TimingSettings}/>
      </Switch>
    );
  }
  
}

export default App;
