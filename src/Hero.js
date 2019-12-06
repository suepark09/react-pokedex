import React from 'react';
import {Jumbotron, Container, Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

class Hero extends React.Component {
    render() {
      return  <Jumbotron fluid className="jumbotron justify-content-center">
      <Container>
        <h1>Which Pokemon are you looking for?</h1>
        <Form inline className="search-container">
            <FormControl type="text" placeholder="Search"  sm="10" className="mr-sm-2 search-bar" />
            <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Jumbotron>
    }
  }
  
export default Hero;