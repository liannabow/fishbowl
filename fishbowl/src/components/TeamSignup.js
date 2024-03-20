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
      teamOnePlayerName: '',
      teamTwoPlayerName: '',
      teamOne: [],
      teamTwo: []
    };

    this.changeTeamOnePlayerName = this.changeTeamOnePlayerName.bind(this);
    this.changeTeamTwoPlayerName = this.changeTeamTwoPlayerName.bind(this);
    this.addTeamOnePlayer = this.addTeamOnePlayer.bind(this);
    this.addTeamTwoPlayer = this.addTeamTwoPlayer.bind(this);
    this.shuffleTeams = this.shuffleTeams.bind(this);
  }

  changeTeamOnePlayerName(event) {
    this.setState({teamOnePlayerName: event.target.value})
  }

  changeTeamTwoPlayerName(event) {
    this.setState({teamTwoPlayerName: event.target.value})
  }

  addTeamOnePlayer(event) {
    const player = {
      name: this.state.teamOnePlayerName,
      id: Date.now()
    };

    this.setState((state, props) => ({
      teamOne: [...state.teamOne, player]
    }));

    this.setState({teamOnePlayerName: ''});

    event.preventDefault();
  }

  addTeamTwoPlayer(event) {
    const player = {
      name: this.state.teamTwoPlayerName,
      id: Date.now()
    };

    this.setState((state, props) => ({
      teamTwo: [...state.teamTwo, player]
    }));

    this.setState({teamTwoPlayerName: ''});

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
        <Row className="Row">
          <Col>
            <div align="center">
              <Button variant="secondary">Team 1</Button>
              <Form onSubmit={this.addTeamOnePlayer}>
                <Form.Row>
                  <Col xs={8}>
                    <Form.Control
                      type="text"
                      placeholder="Player Name"
                      value={this.state.teamOnePlayerName}
                      onChange={this.changeTeamOnePlayerName}
                    />
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit">Add</Button>
                  </Col>
                </Form.Row>
              </Form>
              <Table striped bordered hover>
                <TeamTable team={this.state.teamOne}/>
              </Table>
            </div>          
          </Col>
          <Col>
            <div align="center">
              <Button variant="secondary">Team 2</Button>
              <Form onSubmit={this.addTeamTwoPlayer}>
              <Form.Row>
                  <Col xs={8}>
                    <Form.Control
                      type="text"
                      placeholder="Player Name"
                      value={this.state.teamTwoPlayerName}
                      onChange={this.changeTeamTwoPlayerName}
                    />
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit">Add</Button>
                  </Col>
                </Form.Row>
              </Form>
            <Table striped bordered hover>
              <TeamTable team={this.state.teamTwo}/>
            </Table>
            </div>
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