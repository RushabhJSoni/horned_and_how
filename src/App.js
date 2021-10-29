import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beasts from './data.json';
import SelectedBeast from './SelectedBeast.js';
import BeastForm from './HornedBeasts.js';

let allHorns = Beasts.map(data => data.horns); 

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      numberOfFavorites: 0,
      currentBeast: {},
      horns: allHorns
    }

    }

        imgClick = () => {
        this.setState({show:true});
      }
    
      hideModal = () => {
      this.setState({ show: false })
      }
      handleClick = () => {
        this.setState({numberOfFavorites:this.state.numberOfFavorites + 1});
    
      }
    beastNow = (beast) => {
      this.setState({ 
      currentBeast: beast 
      }) 
      this.imgClick();
    }

render() {
    return (
      <div >
        <Header />
        {/* <BeastForm beastFormBeasts = {this.state.horns}  /> */}
        <Main beastNow={this.beastNow} handleClick={this.handleClick} beasts ={Beasts}/>
        <SelectedBeast currentBeast={this.state.currentBeast} show={this.state.show} hideModal={this.hideModal}/>
        <Footer />
      </div>
    )
  }
}

