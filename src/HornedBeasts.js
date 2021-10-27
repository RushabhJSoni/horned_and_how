import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

class HornedBeasts extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        numberOfFavorites: 0
      }
    }

    handleClick = () => {
      this.setState({numberOfFavorites:this.state.numberOfFavorites + 1});
    }



  render() {
    return(
    <div>
      <Container> 
      <Row>
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
      </Row>
     
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.info.image_url} />
      <Card.Body>
        <Card.Title>{this.props.info.title}</Card.Title>
        <Card.Text>
          {this.props.info.details}
        </Card.Text>
        <Button variant="warning" onClick={this.handleClick}>❤️ {this.state.numberOfFavorites}</Button>
      </Card.Body>
    </Card>
    </Container> 
    {/* <h2>{this.props.info.title}</h2>
    <img src={`${this.props.info.image_url}`} alt={this.props.info.details} /> 
    <Button variant="warning" onClick={this.handleClick}>❤️ {this.state.numberOfFavorites}</Button>
    {this.props.info.description} */}
    </div>
    )
  }
}

export default HornedBeasts;