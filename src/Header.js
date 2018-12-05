import React, { Component } from 'react';
import logo from './images/logo.svg';
import smallLogo from './images/small-logo.svg';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import $ from 'jquery';
class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      $('#main-logo1').hide(1000);
      $('#main-logo2').show(1000);
    } else {
      navbar.classList.remove("sticky");
    }
    if(window.pageYOffset === sticky) {
      $('#main-logo1').show(1000);
      $('#main-logo2').hide(1000);
    }

  };

  render() {
    return (
      <Row xs={12} className="main-header push-top" id="navbar">
        <Col xs={6} className="logo" >
          <img id="main-logo1" src={logo} height="30" alt="logo"/>
          <img style={{ 'display': 'none'}} id="main-logo2" src={smallLogo} height="23" alt="logo"/>
        </Col>
        <Col xs={6} className="header-right">
          <div className="header-icon pull-right"></div>
        </Col>
      </Row>
    )
  }
}
export default Header;
