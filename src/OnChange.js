import { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class BeastForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
     horns: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    
    this.setState({ userName: e.target.value })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="Horns">
            <Form.Label>Horns</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" placeholder="onChange form" value={this.state.value}/>
          </Form.Group>
        </Form>
        <h3>{this.state.userName}</h3>
      </div>
    )
  }
}
