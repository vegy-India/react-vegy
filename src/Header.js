import React, { Component } from 'react';
import logo from './images/logo.svg';
import smallLogo from './images/small-logo.svg';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import static_circle from './images/Static.png';
import moving_down from './images/Scroll_down.png';
import moving_up from './images/Scroll_Up.png';

// import Collapse from 'react-bootstrap/lib/Collapse';
import $ from 'jquery';
class Header extends Component {
  constructor(){
    super();
    this.state = {
      collapse: true,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    var y = $(this).scrollTop();
    if ( y >= 20 ) {
      $('#no_scroll').attr('src',moving_down);
    }
    if( y === 0) {
      $('#no_scroll').attr('src',static_circle);
    }
    if (y < 0){
      $('#no_scroll').attr('src',moving_up);
    }
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
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
          <div className="header-icon pull-right">
          <img id="no_scroll" src={static_circle} alt="static" width="30"/>
          </div>
        </Col>
      </Row>
    )
  }
}
export default Header;
