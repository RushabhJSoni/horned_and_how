import { Component } from "react";
import HornedBeasts from './HornedBeasts.js';
import beastData from './data.json';
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import SelectedBeast from './SelectedBeast.js'



class Main extends Component {
  

  render() {
    return (
    <>
    <Container> 
    <Row sm={3}>
        {beastData.map(info => <HornedBeasts info = {info}/>)};
    </Row>
    </Container> 
    </> 
      
    )
  }
}

export default Main;


      