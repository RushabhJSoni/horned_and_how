import { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HornedBeasts from "./HornedBeasts";



class SelectedBeast extends Component {

  handleClose = () => {
    this.props.hideModals();
  }
  handalModalclick = () => {
    this.props.handleClick();
  }
  
    render() {
      return (
      <div>
          <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.currentBeasts.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.props.currentBeasts.image_url} className="img-fluid"/><p>{this.props.currentBeasts.description}</p></Modal.Body>
            <Modal.Footer>
            {/* <Button variant="warning" onClick={this.handalModalclick}>❤️ {this.props.click}</Button> */}
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
   
  
  
export default SelectedBeast;

