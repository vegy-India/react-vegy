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
        <span><a href="#" target="_blank" style={{color:'black', fontSize: '16px'}} >Instagram</a></span>
        <span> | </span>
        <span><a href="#" target="_blank" style={{color:'black', fontSize: '16px'}} >Facebook</a></span>
        </Col>
      </Row>
    )
  }
}
export default RightSidebar;