import React from 'react';
import { Link } from 'react-router-dom';  
import './TeamSignup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class TeamSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      teamOne: [],
      teamTwo: [],
      isTeamOne: true
    };

    this.changePlayerName = this.changePlayerName.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.shuffleTeams = this.shuffleTeams.bind(this);
  }

  changePlayerName(event) {
    this.setState({playerName: event.target.value})
  }

  addPlayer(event) {
    const player = {
      name: this.state.playerName,
      id: Date.now()
    };

    this.state.isTeamOne ?
      this.setState((state, props) => ({
        teamOne: [...state.teamOne, player]
      })) :
      this.setState((state, props) => ({
        teamTwo: [...state.teamTwo, player]
      }));

    this.setState((state, props) => ({
      isTeamOne: !state.isTeamOne
    }));

    this.setState({playerName: ''});

    event.preventDefault();
  }

  shuffleTeams() {
    const allPlayers = this.state.teamOne.concat(this.state.teamTwo);
    
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = allPlayers.length, temporaryValue, randomIndex;

    //While there remain elements to shuffle...
    while(0 !== currentIndex) {
      
      //Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //And swap it with the current element
      temporaryValue = allPlayers[currentIndex];
      allPlayers[currentIndex] = allPlayers[randomIndex];
      allPlayers[randomIndex] = temporaryValue;
    }

    //https://stackoverflow.com/questions/9181188/splice-an-array-in-half-no-matter-the-size
    const half_length = Math.ceil(allPlayers.length / 2);

    const teamOne = allPlayers.splice(0,half_length);
    const teamTwo = allPlayers;

    this.setState({teamOne: teamOne});
    this.setState({teamTwo: teamTwo});
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Team Signup</h1>
          </Col>
        </Row>
          <Form onSubmit={this.addPlayer}>
            <Form.Row>
              <Col xs={8}>
                <Form.Control
                  type="text"
                  placeholder="Player Name"
                  value={this.state.playerName}
                  onChange={this.changePlayerName}
                  />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Add</Button>
              </Col>
            </Form.Row>
          </Form>
        <Row className="Row">
          <Col>
            <div align="center">
              <Button variant="secondary">Team 1</Button>
              <Table striped bordered hover>
                <TeamTable team={this.state.teamOne}/>
              </Table>
            </div>          
          </Col>
          <Col>
            <div align="center">
              <Button variant="secondary">Team 2</Button>
            </div>
            <Table striped bordered hover>
              <TeamTable team={this.state.teamTwo}/>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <div align="center">
              <Button variant="warning" onClick={this.shuffleTeams}>
                Shuffle Teams
              </Button>
            </div>
          </Col>
          <Col>
            <div align="center">
              <Link to="/Timing">
                <Button variant="success">Next</Button>
              </Link>              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }  
}

function TeamTable(props) {
  const team = props.team;
  const rowItems = team.map((player) => 
    <tr key={player.id}>
      <td>
        {player.name}
      </td>
    </tr>
  );
  return (
    <tbody>{rowItems}</tbody>
  );
}

export default TeamSignup;