import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

class TimingSettings extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Timing Settings</h1>
          </Col>
        </Row>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="seconds"
              />
            </Col>
          </Form.Row>
        </Form>
        <Table>
          <TeamTable names={this.props.teamOne}/>
        </Table>
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

export default TimingSettings;