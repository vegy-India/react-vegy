import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body';
import './styles.css';
import Row from 'react-bootstrap/lib/Row';


class App extends Component {
  render() {
    return (
      <Row md={12} className="hard">
        <Header />
        <Body />
        <Footer />
      </Row>
    )
  }
}
export default App;
