import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import greencard from './images/greencard.svg';

class GreenCard extends Component {
  render() {
    return (
      <Row className="card-green text-sans">
        <Col sm={6}>
          <Row md={12} className="black push">
          <p className="gamma white">Why Now</p>
          It’s no secret that a plant-based diet is good for you. Taking that extra step to eliminate animal products — for good — will make you look and feel absolutely fantastic!
          </Row>
          <Row className="black push" >
          <p className="gamma white">Why Not?</p>
          Find good recipes. You don’t need to go out and buy a bunch of new cookbooks, although that’s certainly an option. But again, you will have vegy.</Row>
        </Col>
        <Col sm={6} className="flush soft-double-top">
          <img src={greencard} alt="vegy"/>
        </Col>
      </Row>
    )
  }
}
export default GreenCard;