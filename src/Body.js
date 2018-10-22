import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import BlackCard from './BlackCard';
import BlueCard from './BlueCard';
import WhiteCard from './WhiteCard';
import GreenCard from './GreenCard';
import image1 from './images/main_image1.png';
import image2 from './images/main_image2.png';

class Body extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    console.log("scroll function called")
    // var image1 = document.getElementById("img1");
    // var image2 = document.getElementById("img2");
    // image1.css('src', '../../main_image1@2x.png');
    // image2.css('src', '../../main_image2@2x.png');
  }

  render() {
    return (
      <Row className="main-body hard">
        <Col>
          <Row md={12} className="soft-bottom hard">
            <Col md={6} style={{marginLeft: '100px'}}>
            <Row md={12} style={{marginLeft: '50px'}} className="push push-double-bottom">
              <Col md={5}>
                <img style={{position: 'absolute', top: '70px', left: '0px'}} id="img1" src={image1} width="300" height="500" alt="veg1"/>
              </Col>
              <Col md={5}>
              <img style={{position: 'absolute', top: '-99px', left: '-50px'}} id="img2" src={image2} width="500" height="550" alt="veg2"/>
              </Col>
            </Row>
            </Col>
            <Col md={6} style={{ marginTop: '150px', marginLeft: '-150px'}}>
            <p className="banner-text hard">This is <br/> something <br/><span className="vegy" >vegy </span>right?</p>
            <div>
              <p className="banner-small-text">Is that why Stéréosuper and its tight group of Frenchies <br/>are so good at whipping up awesome visual identities <br/>and designing kick-ass sites and apps?<br/> Lucky for you, Stéréosuper goes all American dream <br/>and opens an office in Brooklyn.Want to talk about it?</p>
            </div> 
            </Col>
          </Row>
          <Row md={12} className="hard" style={{ marginTop: '400px' }}>
            <Col md={6} style={{left: '600px', top:'60px'}}>
              <Row className="soft">
                <GreenCard />
              </Row>
              <Row style={{ position: 'absolute',top: '260px', left: '80px'}}>
                <BlueCard />
              </Row>
            </Col>
            <Col md={6} style={{left: '-600px', top:'0'}}>
              <Row md={12}>
                <Col md={6} style={{left: '300px', top:'30px'}}>
                  <WhiteCard />
                </Col>
                <Col md={4} style={{left: '-260px', top:'0'}}>
                  <BlackCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
export default Body;
