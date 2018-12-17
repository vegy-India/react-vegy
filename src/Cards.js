import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import BlackCard from './BlackCard';
import BlueCard from './BlueCard';
import WhiteCard from './WhiteCard';
import GreenCard from './GreenCard';
import SmallWhiteCard from './SmallWhiteCard';
import SmallGreenCard from './SmallGreenCard';
import SmallBlueCard from './SmallBlueCard';
import scroll from './images/scroll.svg';
import $ from 'jquery';

class Card extends Component {
  render() {
    return (
      <div id="cards-section">
        <Row xs={12} className="soft">
          <div className="text-center"><img src={scroll} alt="scroll" height="40"></img></div>
        </Row>
        <Row xs={12} style={{marginTop: '120px'}}>
          <Col xsHidden md={6} style={{left: '550px', top:'150px'}}>
            <Row id="greenCard" className="soft">
              <GreenCard />
            </Row>
            <Row id="blueCard" style={{ position: 'absolute',top: '260px', left: '80px'}}>
              <BlueCard />
            </Row>
          </Col>
          <Col xsHidden md={6} style={{left: '-550px', top:'0'}}>
            <Row md={12}>
              <Col id="whiteCard" md={7} style={{left: '300px', top:'30px'}}>
                <WhiteCard />
              </Col>
              <Col id="blackCard" md={5} style={{left: '-260px', top:'0'}}>
                <BlackCard />
              </Col>
            </Row>
          </Col>
          <Col mdHidden lgHidden xs={12}>
            <Row xs={6} className="soft">
              <SmallWhiteCard />
            </Row>
            <Row xs={6} className="soft">
              <SmallGreenCard />
            </Row>
            <Row xs={6} className="soft">
              <SmallBlueCard />
            </Row>
          </Col>
        </Row>

      </div>
    )
  }
}
export default Card;