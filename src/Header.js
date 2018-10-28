import React, { Component } from 'react';
import logo from './images/logo.svg';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };

  render() {
    return (
      <Row xs={12} className="main-header push-top" id="navbar">
        <Col xs={6} className="logo">
          <img src={logo} height="25" alt="logo"/>
        </Col>
        <Col xs={6} className="soft-right">
          <div className="header-icon pull-right"></div>
        </Col>
      </Row>
    )
  }
}
export default Header;