import { Component } from "react";


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
    {this.props.title}
    <img src={`${this.props.img}`} alt={''} onClick={this.handleClick}/> 
    <p>{this.props.fav} {this.state.numberOfFavorites}</p>
    {this.props.des}
    </div>
    )
  }
}

export default HornedBeasts;