import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import $ from 'jquery';

class Connect extends Component {
  handleSubmit(){
    console.log("inside function")
    // $.ajax({
    //   url: '/data.php',
    //   type: 'POST',
    //   data: { name: 'priya'},
    //   complete: function(data) {
    //     alert('success');
    //   },
    //   failure: function(){
    //     alert('failed');
    //   }
    //   }); 
  }
  render() {
    return (
      <Row xs={12}>
        <Col xsHidden md={6} style={{marginLeft:"180px", marginTop: "50px"}}>
          <Row className="soft beta white bold text-sans">Let's <br/>Connect
          </Row>
          <Row className="soft">
          <form>
            <input placeholder="Enter Your Email id" style={{border:'none', height:'40px', width:'250px'}}></input>
            <button type="submit" onClick={this.handleSubmit} />
          </form>
          </Row>
          <Row md={3} className="soft white">Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?</Row>
        </Col>
        <Col mdHidden lgHidden style={{marginLeft:"20px"}}>
          <Row className="soft beta white bold text-sans">Let's <br/>Connect
          </Row>
          <Row className="soft">
          <form>
            <input placeholder="Enter Your Email id" style={{border:'none', height:'40px', width:'250px'}}></input>
            <button type="submit" onClick={this.handleSubmit} />
          </form>
          </Row>
          <Row md={3} className="soft white">Is that why Stéréosuper and its tight group of Frenchies are so good at whipping up awesome visual identities and designing kick-ass sites and apps? Lucky for you, Stéréosuper goes all American dream and opens an office in Brooklyn.Want to talk about it?</Row>
        </Col>
      </Row>
    )
  }
}

export default Connect;