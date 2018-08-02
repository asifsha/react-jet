import React from 'react';
import { Modal } from 'reactstrap';
 

  
  class ModalPopup extends React.Component {
    constructor(props) {
      super(props);
        
      this.state = {
        modalIsOpen: this.props.modalIsOpen
      };
  
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {     
        this.setState({
            modalIsOpen: nextProps.modalIsOpen
        })
      
      }
  
    openModal() {
      this.setState({modalIsOpen: true});
    }

    toggle() {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen
      });
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      //this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }
  
    render() {       
      return (
        <div>          
          <Modal
            isOpen={this.state.modalIsOpen}
            toggle={this.toggle}
            onClosed={this.closeModal}        
            size={this.props.size}
          >                      
            {this.props.children}           
          </Modal>        
        </div>
      );
    }
  }

  export default ModalPopup;