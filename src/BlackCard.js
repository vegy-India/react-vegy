import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import heart from './images/heart.svg';
import logo from './images/logo.svg'

class BlackCard extends Component {
  render() {
    return (
      <Row md={12} className="card-black">
        <Col className="soft-left soft-right soft-top">
          <Row className="white bold alpha hard text-sans">RECI PE.<br/> TO <br/><p className="text-vegy hard">FAL<br/>L <br/></p>IN</Row>
          <img className="soft-double-bottom" src={heart} height="55" alt="image1" />
          <Row md={12} className="divide-horizontal">
            <Col md={6} className="text-vegy gamma bold hard-left"><img src={logo} /></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default BlackCard;
