import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class SmallGreenCard extends Component {
  render() {
    return (
      <Row className="small-card-green text-sans">
        <Col>
          <Row md={12} className="soft-top">
            <Col md={6} className="soft white">Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual </Col>
            <Col md={6} className="white beta bold text-center">vegy.</Col>
          </Row>
          <Row className="white soft">All our dishes are homemade with the best locally grown organic products. No animal was ever harmed in our kitchen. We like gluten, though. Sorry. Watch French TV legend Maïté cook frog legs</Row>
        </Col>
      </Row>
    )
  }
}
export default SmallGreenCard;