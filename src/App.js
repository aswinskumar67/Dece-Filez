import React from 'react';
import './App.css';
import Head1 from './Components/Navigation/head1';
import { Container, Row, Col } from 'reactstrap';
import MainComponent from './Components/Main Section/Main.js';



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Head1/></Col>
        </Row>
        <Row> 
          <Col><MainComponent/></Col>
        </Row>
        
      </Container>
     
     
    </div>
  );
}

export default App;
