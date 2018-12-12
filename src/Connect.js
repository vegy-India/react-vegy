import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import $ from 'jquery';

class Connect extends Component {
  validateEmail() {

  }
  handleSubmit(e){
    // console.log("inside function",e.target);
    // e.preventDefault();
    // this.validateEmail();
    // $('#myForm').hide();
    // $('#confirm').show();
  }
  render() {
    return (
      <div id="section-connect" style={{ paddingTop: '340px', paddingBottom: '200px'}}>
        <Row xs={12} className="push">
          <Col xsHidden md={6}>
            <Row className="soft alpha bold text-sans black">Let's <br/>Connect
            </Row>
          </Col>
          <Col xsHidden md={6} className="push-top">
            <Row className="soft push-ends">
              <form action="https://mailthis.to/vegy" method="POST">
                <input className="push black" placeholder="Enter your Email Id here" name="_subject" style={{border: 'none', height:'55px', width:'400px'}}></input>
                <button type="submit" onClick={this.handleSubmit} />
              </form>
            </Row>
            <Row id="confirm" style={{display: 'none'}} className="soft">
              <Button bsStyle="success">Subscribed</Button>
            </Row>
            <Row className="soft zeta black">Enter your email to see what we’have working on and stay in <br/>the know, on the go. All of this is will be brought together in <br/>one easy-to-use and beautifully designed website and app.</Row>  
          </Col>
          {/* <Col mdHidden lgHidden style={{marginLeft:"20px",color: '#463E3E'}}>
            <Row className="soft beta white bold text-sans">Let's <br/>Connect
            </Row>
            <Row id="myForm" className="soft">
            <form action="https://mailthis.to/vegy" method="POST">
              <input placeholder="Enter Your Email id" name="emailId" style={{border:'none', height:'40px', width:'250px'}}></input>
              <button type="submit" onClick={this.handleSubmit} />
            </form>
            </Row>
            <Row id="confirm" style={{display: 'none'}} className="soft">
              <Button bsStyle="success">Subscribed</Button>
            </Row>
            <Row md={3} className="soft white">Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?</Row>
          </Col> */}
      </Row>
      </div>
    )
  }
}

export default Connect;