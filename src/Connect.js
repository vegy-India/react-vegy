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
      <Row xs={12}>
        <Col xsHidden md={6} style={{marginLeft:"30px", marginTop: "50px", color: '#463E3E'}}>
          <Row className="soft beta bold text-sans">Let's <br/>Connect
          </Row>
          <Row className="soft">
          <form action="https://mailthis.to/vegy" method="POST">
            <input className="push" placeholder="Enter Your Email id" name="_subject" style={{border:'1px solid #463E3E', height:'40px', width:'250px'}}></input>
            <button type="submit" onClick={this.handleSubmit} />
          </form>
          </Row>
          <Row id="confirm" style={{display: 'none'}} className="soft">
            <Button bsStyle="success">Subscribed</Button>
          </Row>
          <Row md={3} className="soft">Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?</Row>
        </Col>
        <Col mdHidden lgHidden style={{marginLeft:"20px",color: '#463E3E'}}>
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
        </Col>
      </Row>
    )
  }
}

export default Connect;