import { Component } from "react";
import { Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import SelectedBeast from "./SelectedBeast";


class HornedBeasts extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        numberOfFavorites: 0,
        show:false,
      }
    }

    imgClick = () => {
        this.setState({show:true});
    }
    handleClick = () => {
      this.setState({numberOfFavorites:this.state.numberOfFavorites + 1});
    }
    hideModal = () => {
      this.setState({ show: false })
  }


  render() {
    return(
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.info.image_url} onClick={this.imgClick} />
      <Card.Body>
        <Card.Title>{this.props.info.title}</Card.Title>
        <Card.Text>{this.props.info.description}</Card.Text>
        <Button variant="warning" onClick={this.handleClick}>❤️ {this.state.numberOfFavorites}</Button>
        </Card.Body>
    </Card>
    <SelectedBeast show ={this.state.show} hideModal={this.hideModal} head={this.props.info.title} img={this.props.info.image_url} desc={this.props.info.description} click={this.state.numberOfFavorites} handleClick={this.handleClick}/>
    </div>
    )
  }
}

export default HornedBeasts;