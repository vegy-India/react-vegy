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
import Connect from './Connect';
import image1 from './images/main_image1.png';
import image2 from './images/main_image2.png';
import scroll from './images/scroll.svg';
import bird1 from './images/bird-02_1.cur';
import bird2 from './images/bird-03.cur';
import bird3 from './images/bird-04_1.cur';
import bird4 from './images/bird-05_1.cur';
import $ from 'jquery';

class Body extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  onMouseOver() {
    // console.log('inside fu7nction');
    // var playground = document.querySelector("#playWithCursor");
    // var cursorArray = ['url("http://jantimon.nl/running_man/running_man_1.cur"), auto',
    // 'url("http://jantimon.nl/running_man/running_man_2.cur"), auto',
    // 'url("http://jantimon.nl/running_man/running_man_3.cur"), auto',
    // 'url("http://jantimon.nl/running_man/running_man_4.cur"), auto',
    // 'url("http://jantimon.nl/running_man/running_man_5.cur", auto'];
    // var i = 0;
    // (function cursor(){
    // playground.style.cursor  = cursorArray[i];
    // i++;
    // if(i === cursorArray.length){
    // i = 0; 
    // }
    // setTimeout(cursor, 50);
    // })();
}

  handleScroll() {
    console.log("scroll function called");
    // var image1 = document.getElementById("img1");
    // var image2 = document.getElementById("img2");
    // image1.css('src', '../../main_image1@2x.png');
    // image2.css('src', '../../main_image2@2x.png');
  }

  render() {
    return (
      <Row xs={12} className="main-body hard">
        <Col xs={12}>
          <Row md={12} className="soft-bottom hard" id="playWithCursor" onMouseOver={this.onMouseOver}>
            <Col xsHidden md={6} style={{marginLeft: '100px'}}>
              <Row md={12} style={{marginLeft: '50px'}} className="push push-double-bottom">
                {/* <Col md={5}>
                </Col>
                <Col md={5}>
                <img style={{position: 'absolute', top: '-99px', left: '-50px'}} id="img2" src={image2} width="500" height="550" alt="veg2"/>
                </Col> */}
              </Row>
            </Col>
            <Col xsHidden md={6} style={{ marginTop: '150px', marginLeft: '-150px'}}>
            <p className="banner-text push-top">This is <br/> something <br/><span className="vegy" >vegy </span>right?</p>
            <div>
              <p className="banner-small-text soft-double-top">Is that why Stéréosuper and its tight group of Frenchies <br/>are so good at whipping up awesome visual identities <br/>and designing kick-ass sites and apps?<br/> Lucky for you, Stéréosuper goes all American dream <br/>and opens an office in Brooklyn.Want to talk about it?</p>
            </div> 
            </Col>
          </Row>
          {/* <Row xs={12}>
            <Col xs={4} mdHidden lgHidden>
              <img id="img1" src={image1} width="200" height="250" alt="veg1"/>
            </Col>
            <Col md={4} mdHidden lgHidden>
            <img id="img2" src={image2} width="180" height="270" alt="veg2"/>
            </Col>
          </Row> */}
          <Row >
            <Col mdHidden lgHidden>
            <p className="small-banner-text soft push-top">This is <br/> something <br/><span className="vegy" >vegy </span>right?</p>
            <div>
              <p className="banner-small-text soft">Is that why Stéréosuper and its tight group of Frenchies <br/>are so good at whipping up awesome visual identities <br/>and designing kick-ass sites and apps? <br/>and opens an office in Brooklyn.Want to talk about it?</p>
            </div> 
            </Col>
          </Row>
          <Row xs={12} className="soft">
            <div className="text-center soft-double-top push-double-top"><img src={scroll} alt="scroll" height="40"></img></div>
          </Row>
          <Row xs={12} style={{marginTop: '100px'}}>
            <Col xsHidden md={6} style={{left: '600px', top:'60px'}}>
              <Row id="greenCard" className="soft">
                <GreenCard />
              </Row>
              <Row id="blueCard" style={{ position: 'absolute',top: '260px', left: '80px'}}>
                <BlueCard />
              </Row>
            </Col>
            <Col xsHidden md={6} style={{left: '-600px', top:'0'}}>
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
          <Row>
            <Connect />
          </Row>
        </Col>
      </Row>
    )
  }
}
export default Body;
