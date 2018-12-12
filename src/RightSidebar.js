import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class RightSidebar extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var sidebar = document.getElementById('side-right');
    var sticky = sidebar.offsetTop;
    if (window.pageYOffset >= sticky) {
      sidebar.classList.add("sticky")
    } else {
      sidebar.classList.remove("sticky");
    }
  }

  render() {
    return (
      <Row id='side-right' className="center pull-right">
        <Col className="downwards">
        <span id="insta"><a href="https://www.instagram.com/vegy.india/" target="_blank" rel="noreferrer noopener" className="black zeta bold" >Instagram</a></span>
        <span> | </span>
        <span id="fb"><a href="https://www.facebook.com/vegy.india/" target="_blank" rel="noreferrer noopener"  className="black zeta bold" >Facebook</a></span>
        </Col>
      </Row>
    )
  }
}
export default RightSidebar;