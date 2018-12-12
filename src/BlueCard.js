import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class BlueCard extends Component {
  render() {
    return (
      <div className="card-blue push">
        <Row md={10} className="delta soft"><span className="white">Vegy</span> is a curated platform that allows the visual search and discovery of new recipes, techniques and ingredients to inspire culinary adventures.</Row>
      </div>
    )
  }
}

export default BlueCard;
