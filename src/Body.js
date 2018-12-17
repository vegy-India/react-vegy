import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Connect from './Connect';
import Cards from './Cards';
import image1 from './images/vegy.png';
import bird from './images/bird.gif';
import bird1 from './images/bird-02_1.cur';
import bird2 from './images/bird-03.cur';
import bird3 from './images/bird-04_1.cur';
import bird4 from './images/bird-05_1.cur';
import $ from 'jquery';

class Body extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    $('body').addClass('custom-cursor');
    $('body').mousemove(function(e){
    $("#mycursor").addClass('show');
    $("#mycursor").css({left:e.pageX -150, top:e.pageY - 150});
    });
  }

  onMouseOver(e) {
    console.log('inside function');
    // $("#mycursor").addClass('show');
    // $('#playWithCursor').addClass('custom-cursor');
    // $('#playWithCursor').mousemove(function(e){
    // $("#mycursor").css({left:e.pageX -150, top:e.pageY - 150});
    // }
    
}
  onMouseOut() {
    // console.log('outside function')
    // $("#mycursor").removeClass('show')
    // $('#playWithCursor').removeClass('custom-cursor');

  }

  handleScroll() {
    console.log("scroll function called");
  }

  render() {
    return (
      <Row xs={12} className="main-body hard">
        <Col xs={12}>
          <Row md={12} style={{marginTop: '80px'}}>
            <Col xsHidden md={6}>
              <Row md={12} className="push">
                <Col md={5} className="vegy-square soft-left" id="playWithCursor" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={{position:'relavtive'}} >
                <img id="img2" src={image1} width="450" height="450" alt="veg2" className="push-double-top soft-double-top"/>
                <img class="mycursor" id="mycursor" src={bird} height="30" width="30" alt="cursor" style={{position:'absolute', display: 'none', left: '50%', top: '50%', zIndex: '2'}}/>
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
          <Cards />
          <Row className="push--top">
            <Connect />
          </Row>
        </Col>
      </Row>
    )
  }
}
export default Body;
