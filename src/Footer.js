import React, { Component } from 'react';
import Nav  from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Footer extends Component {
  render() {
    return (
      <Row sm={6} className="push" style={{ marginLeft: '450px' }}>
        <Col xsHidden>
          <Nav bsStyle="pills">
            <NavItem style={{color: '#463E3E'}}eventKey={1}>For Investors</NavItem>
            <NavItem style={{color: '#463E3E'}} eventKey={2}>Career</NavItem>
            <NavItem style={{color: '#463E3E'}} eventKey={3}>Terms&Policy</NavItem>
            <NavItem style={{color: '#463E3E'}} eventKey={4}>info@vegy.in</NavItem>
          </Nav>
        </Col>
      </Row>
    )
  }
}
export default Footer;
