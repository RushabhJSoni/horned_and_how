import { Component } from "react";
import { Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

class HornedBeasts extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfFavorites: 0,
    }
  }   
    currentClick = () => {
        this.props.beastNow(this.props.info);
    }
    

    handleClick = () => {
      this.setState({numberOfFavorites:this.state.numberOfFavorites + 1});
    }
  

  render() {
    return(
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.info.image_url} onClick={this.currentClick} />
      <Card.Body>
        <Card.Title>{this.props.info.title}</Card.Title>
        <Card.Text>{this.props.info.description}</Card.Text>
        <Button variant="warning" onClick={this.handleClick}>❤️ {this.props.handleClick}</Button>
        </Card.Body>
    </Card>

    </div>
    )
  }
}

export default HornedBeasts;