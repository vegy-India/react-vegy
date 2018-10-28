import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
class WhiteCard extends Component {
  render() {
    return (
      <Row className="small-card-white">
        <Col>
          <Row className="papercut soft-sides"></Row>
          <Row className="text-purple gamma text-sans soft push-top">WHY VEGY?</Row>
          <Row className="soft">
          Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?
          are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?
          </Row>
          <br/>
          <Row className="soft">Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?</Row>
        </Col>
      </Row>
    )
  }
}

export default WhiteCard;