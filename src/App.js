import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import './styles.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col'


class App extends Component {
  render() {
    return (
      <Row md={12} className="hard">
        <Col>
          <Header />
          <Row xs={12}>
            <Col xs={1}>
              <LeftSidebar
              />
            </Col>
            <Col xs={10}>
              <Body />
            </Col>
            <Col xs={1}>
              <RightSidebar
              />
            </Col>
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
export default App;
