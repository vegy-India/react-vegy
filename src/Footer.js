import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Footer extends Component {
  render() {
    return (
      <div>
        <Row sm={12} className="soft-sides">
          <Col sm={4} style={{paddingLeft: '250px'}}>
            <p className="black zeta bold">For Investors</p>
          </Col>
          <Col sm={1} style={{paddingLeft: '-100px'}}>
          <p className="black zeta bold">Career</p>
          </Col>
          <Col sm={2} style={{paddingLeft: '-50px'}}>
          <p className="black zeta bold">Terms & Policy</p>
          </Col>
          <Col sm={4} style={{paddingLeft: '250px'}}>
          <p className="black zeta bold">info@vegy.in</p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Footer;
