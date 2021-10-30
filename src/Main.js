import { Component } from "react";
import HornedBeasts from './HornedBeasts.js';
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";




class Main extends Component {
  

  render() {
    return (
    <>
    <Container> 
    <Row sm={3}>
        {this.props.Beasts.map(info => <HornedBeasts openModal={this.props.openModal} info = {info}/>)};
    </Row>
    </Container> 
    </> 
      
    )
  }
}

export default Main;


      