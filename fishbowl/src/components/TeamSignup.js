import React from 'react';
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
  }

  changePlayerName(event) {
    this.setState({playerName: event.target.value})
  }

  addPlayer(event) {
    this.state.isTeamOne ?
      this.setState((state, props) => ({
        teamOne: state.teamOne.concat(state.playerName)
      })) :
      this.setState((state, props) => ({
        teamTwo: state.teamTwo.concat(state.playerName)
      }));

    this.setState((state, props) => ({
      isTeamOne: !state.isTeamOne
    }));

    this.setState({playerName: ''});

    event.preventDefault();
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
                <TeamTable names={this.state.teamOne}/>
              </Table>
            </div>          
          </Col>
          <Col>
            <div align="center">
              <Button variant="secondary">Team 2</Button>
            </div>
            <Table striped bordered hover>
              <TeamTable names={this.state.teamTwo}/>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <div align="center">
              <Button variant="warning">Shuffle Teams</Button>
            </div>
          </Col>
          <Col>
            <div align="center">
              <Button variant="success">Next</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }  
}

function TeamTable(props) {
  const names = props.names;
  const rowItems = names.map((name, index) => 
    <tr>
      <td key={index}>
        {name}
      </td>
    </tr>
  );
  return (
    <tbody>{rowItems}</tbody>
  );
}

export default TeamSignup;