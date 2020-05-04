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
      playerName: ''
    };

    this.changePlayerName = this.changePlayerName.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  changePlayerName(event) {
    this.setState({playerName: event.target.value})
  }

  addPlayer(event) {
    alert('A name was submitted: ' + this.state.playerName);
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
                <tbody>
                  <tr>
                    <td>Name 1</td>
                  </tr>
                  <tr>
                    <td>Name 2</td>
                  </tr>
                </tbody>
              </Table>
            </div>          
          </Col>
          <Col>
            <div align="center">
              <Button variant="secondary">Team 2</Button>
            </div>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Name 3</td>
                </tr>
                <tr>
                  <td>Name 4</td>
                </tr>
              </tbody>
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

export default TeamSignup;