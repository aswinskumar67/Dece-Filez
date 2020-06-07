import React from 'react';
import { Container,Row,Col } from "reactstrap";
import Mainimage from './Mainimage.svg';
import './Main.css';

class MainComponent extends React.Component {
        render(){
            return (
        <div>
            <Container className="mainSection" >
                <Row>
                    
                    <Col > <h1 className="App-name">DECE 
                        FILEZ</h1></Col>
                    <Col > <img src={Mainimage} className="img-fluid" alt="" /></Col>
                   
                 </Row>
            
                
                  
            </Container>
        
        </div>
            )
      }
}

export default MainComponent;