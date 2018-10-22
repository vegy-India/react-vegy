import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class BlueCard extends Component {
  render() {
    return (
      <Row md={12} className="card-blue text-sans">
        <Col md={6} className="divide-horizontal soft-double-top">
          <p className="soft white">
          Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual
          </p>
        </Col>
        <Col md={6} className="divide-horizontal soft-double-top">
          <p className="soft white">
          Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual
          </p>
        </Col>
        <Row md={12} className="white bold beta soft text-center"> VEGETERIAN </Row>
      </Row>
    )
  }
}

export default BlueCard;
