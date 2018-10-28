import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class SmallBlueCard extends Component {
  render() {
    return (
      <Row xs={12} className="small-card-blue text-sans text-center">
        <Col>
          <Row xs={6} className="soft-double-top">
            <p className="soft white">
            Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual
            </p>
          </Row>
          <Row xs={6} className="soft-double-top">
            <p className="soft white">
            Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual
            </p>
          </Row>
          <Row xs={6} className="white bold gamma soft text-center"> VEGETERIAN </Row>
        </Col>
      </Row>
    )
  }
}

export default SmallBlueCard;
