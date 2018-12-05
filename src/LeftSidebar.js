import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class LeftSidebar extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var sidebar = document.getElementById('side-left');
    var sticky = sidebar.offsetTop;
    if (window.pageYOffset >= sticky) {
      sidebar.classList.add("sticky")
    } else {
      sidebar.classList.remove("sticky");
    }
  }
  render() {
    return (
      <Row id='side-left' className="center ">
        <Col className="upwards">
          <span>
            <a href="#" target="_blank" style={{color:'#463E3E', fontSize: '16px'}} >
              #vegy
            </a>
          </span>
        </Col>
      </Row>
    )
  }
}
export default LeftSidebar;
