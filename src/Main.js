import { Component } from "react";
import HornedBeasts from './HornedBeasts.js';
import BeastForm from "./BeastForm.js";

class Main extends Component {
  

  render() {
    return (
      <div>
        {this.props.beasts.map(info => <HornedBeasts beastNow={this.props.beastNow} info={info} />)};
        
      </div>
      
    )
  }
}

export default Main;


      