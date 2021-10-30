import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import Beasts from './data.json';
import SelectedBeast from './SelectedBeast.js';
import HornForm from './HornForm.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: {},
      Selection: Beasts,
    }
  }
    openModal = () => {
      this.setState({show: true});
    } 

    hideModal = () => {
      this.setState({show: false});
    }

    currentBeast = (Beast) => {
      this.setState({beast: Beast})
      this.openModal();
    }

    handleBeast = (selectionOfHorns) => {
      
      let updatedBeasts;

          if(selectionOfHorns === "1") {
              updatedBeasts = Beasts.filter( beast => beast.horns === 1);
          
              this.setState({Selection: updatedBeasts})
      }

          if(selectionOfHorns === "2") {
              updatedBeasts = Beasts.filter( beast => beast.horns === 2);
          
              this.setState({Selection: updatedBeasts})
      }

          if(selectionOfHorns === "3") {
              updatedBeasts = Beasts.filter( beast => beast.horns === 3);
          
              this.setState({Selection: updatedBeasts})
      }

          if(selectionOfHorns === "all") {
              updatedBeasts = Beasts.filter( beast => beast);
          
              this.setState({Selection: updatedBeasts})
      }
  }

  
  render() {
    return (
      <div >
        <Header  />
        <HornForm handleBeast={this.handleBeast} />
        <Main openModal={this.currentBeast} Beasts={this.state.Selection}/>
        
        <SelectedBeast  hideModals={this.hideModal} show={this.state.show} currentBeasts={this.state.beast}/>
        
        <Footer />
      </div>
    )
  }
}

