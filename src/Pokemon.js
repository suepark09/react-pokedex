import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './App.css';

class Pokemon extends React.Component {
    render() {
      return  <Card style={{ width: '13rem' }} className="card-container">
      <Card.Img variant="top" src={this.props.url} />
      <Card.Body>
        <Card.Title className="card-title">{this.props.name}</Card.Title>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
    }
  }
  
export default Pokemon;