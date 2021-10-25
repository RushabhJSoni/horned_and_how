import { Component } from "react";

class HornedBeasts extends Component {
  
  render() {
    return(
      <>
    <h2>{this.props.title}</h2>
    <img src={this.props.imageUrl}/>
    <p>{this.props.desc}</p>
    </>
    )
  }
}

export default HornedBeasts;