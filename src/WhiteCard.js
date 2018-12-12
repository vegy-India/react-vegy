import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
class WhiteCard extends Component {
  render() {
    return (
      <Row className="card-white">
        <Col>
          <Row className="papercut soft-sides"></Row>
          <Row className="text-purple gamma text-sans soft push-top bold">WHY VEGY?</Row>
          <Row className="soft zeta black">
          The extent of overall vegetarianism is much less than common claims and stereotypes suggest; survey estimates show that between 23% and 37% of the population of India is vegetarian.
          </Row>
          <br/>
          <Row className="soft zeta black">Despite the revelation, it remains a fact that India has the lowest meat consumption rates in the world. India is home to the highest vegetarian population in the world. In 2013, The Guardian named India among the best countries to be vegetarian in.</Row>
          <br/>
          <Row className="soft push-double-bottom zeta black">
          It’s time to ask ourselves: if it is now possible to live a life that involves delicious food and drink, delivers better health, leaves a smaller carbon footprint and avoids killing other creatures - then why don’t we go vegy?
          </Row>
        </Col>
      </Row>
    )
  }
}

export default WhiteCard;