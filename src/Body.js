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
import image1 from './images/vegy.png';
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
    $('#playWithCursor').addClass('custom-cursor');
    // console.log('inside fu7nction');
    // var playground = document.querySelector("#playWithCursor");
    // var cursorArray = ['url("https://a.uguu.se/JpFWAUx3XLMK_bird-03.cur"), auto',
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
onMouseOut() {
  $('#playWithCursor').removeClass('custom-cursor');
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
          <Row md={12} style={{marginTop: '80px'}} id="playWithCursor" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            <Col xsHidden md={6}>
              <Row md={12} className="push">
                <Col md={5} className="vegy-square soft-left">
                <img id="img2" src={image1} width="450" height="450" alt="veg2" className="push-double-top soft-double-top"/>
                </Col>
              </Row>
            </Col>
            <Col xsHidden md={6} style={{marginTop:'120px', marginLeft: '-100px'}}>
              <p className="banner-text">This is <br/> something <span className="vegy bold" >vegy </span>right?</p>
              <div>
              <p className="banner-small-text">So we are. <span className="vegy" >Vegy </span> is an indigenus foodie community offering a<br/> platform to connect eaters to the best <span style={{fontWeight: 'bold'}}>vegeterian recipe</span>, with <br/>first class reviews written by people who simply love food.</p>
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
              <p className="banner-small-text soft">So we are. <span className="vegy" >Vegy </span>  is an indigenus foodie community offering a platform to connect eaters to the best <span style={{fontWeight: 'bold'}}>vegeterian recipe</span>,with first class reviews written by people who simply love food.</p>
            </div> 
            </Col>
          </Row>
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
          <Row className="push--top">
            <Connect />
          </Row>
        </Col>
      </Row>
    )
  }
}
export default Body;
