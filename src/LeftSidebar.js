import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import $ from 'jquery';

class LeftSidebar extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  onMouseOver () {
    $('#cta-vegy').addClass('text-vegy');
    $('#mycursor').css('display','none');
  }

  onMouseOut () {
    $('#cta-vegy').removeClass('text-vegy');
    $('#mycursor').removeClass('hide');
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
        <Col className="upwards" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
          <span>
            <a id="cta-vegy" href="#section-connect" className="text-barlow black zeta bold" >
              #vegy
            </a>
          </span>
        </Col>
      </Row>
    )
  }
}
export default LeftSidebar;
