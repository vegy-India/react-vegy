import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Footer extends Component {
  render() {
    return (
      <div>
        <Row sm={12} className="soft-sides push-double-bottom">
          {/* <Col sm={4}>
            <p className="black zeta bold">For Investors</p>
          </Col>
          <Col sm={4}>
          <p className="black zeta bold">Terms & Policy</p>
          </Col> */}
          <Col sm={4} style={{marginLeft: '110px'}}>
          <p className="black zeta bold">info@vegy.in</p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Footer;
