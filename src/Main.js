import { Component } from "react";
import HornedBeasts from './HornedBeasts.js';
import  hornedBeastData from './data.js';



class Main extends Component {
  

  render() {
    return (
      <>
        <HornedBeasts title={hornedBeastData.map(data=> <h2>{data.title}</h2>)} img={hornedBeastData.map(data=> data.image_url)} fav={hornedBeastData.map(data => <p>no of favorites</p>)} des={hornedBeastData.map(data=> <p>{data.description}</p>)}/>
      
      </> 
      
    )
  }
}

export default Main;

{/* <HornedBeasts title={'UniWhal'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} alt={"UniWhal image"} desc={'A unicorn and a narwhal nuzzling their horns'}/>
      <HornedBeasts title={'Rhino Family'} imageUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} alt={"Rhino Family image"} desc={'Parent rhino with two babies'}/>*/}
      