import { Component } from "react";
import { Form } from "react-bootstrap";




export default class HornForm extends Component {
    
    

        handleChange = (e) => {
            let selectionOfHorns = e.target.value;
            this.props.handleBeast(selectionOfHorns);

        }
   
        render() {
            return (
              <div>
                <Form>
                  <Form.Select onChange={this.handleChange} aria-label="Default select example">
                    <option>Select a number filter</option>
                    <option value="1">1 horn</option>
                    <option value="2">2 horn</option>
                    <option value="3">3 horn</option>
                    <option value="all">all Beasts</option>
                  </Form.Select>
                </Form>
              </div>
            )
          }
}

