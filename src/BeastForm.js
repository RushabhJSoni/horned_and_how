import { Component } from "react";
import { Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import OnChange from "./OnChange.js"






class BeastForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentBeast: {},
      horns: {}
    }
    
    }

    handleChange = (event) => {
      let selection = event.target.value;
      let updatedBeasts;
      if (selection === "1") {
        updatedBeasts = this.props.beastFormBeasts.filter( horns => horns === 1 )
        this.setState({horns: updatedBeasts})
      }
      if (selection === "2") {
        updatedBeasts = this.props.beastFormBeasts.filter( horns => horns === 2 )
        this.setState({horns: updatedBeasts})
      }
      if (selection === "3") {
        updatedBeasts = this.props.beastFormBeasts.filter( horns => horns === 3 )
        this.setState({horns: updatedBeasts})
      }
      if (selection === "3 or more") {
        updatedBeasts = this.props.beastFormBeasts.filter( horns => this.props.Beasts.horns > 3 )
        this.setState({horns: updatedBeasts})
      }
    }

    beastGroup = (Beasts) => {
      this.setState({ 
      horns: Beasts
      }) 
    }

    handleChange = (e) => {
      console.log(e.target.value);
      
      this.setState({ horns: e.target.value })
    }

  render() {
    return(
    <div>
      <Form>
      <Form.Select onChange={this.handleChange}>
        <option value="d">Select number of Horns!</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3 and above">Three</option>
      </Form.Select>
      </Form>
      <ListGroup>
      <ListGroup.Item>{this.beastGroup}</ListGroup.Item>
        </ListGroup>
    </div>
    )
  }
}
    
export default BeastForm;