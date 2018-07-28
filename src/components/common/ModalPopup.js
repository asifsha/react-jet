import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root');
  class ModalPopup extends React.Component {
    constructor(props) {
      super(props);
        console.log('in model constructor');
      this.state = {
        modalIsOpen: this.props.modalIsOpen
      };
  
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('in componentWillReceiveProps');
        console.log(nextProps.modalIsOpen);

        this.setState({
            modalIsOpen: nextProps.modalIsOpen
        })
      
      }
  
    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      //this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }
  
    render() {
        console.log('in popup render');
        console.log(this.state.modalIsOpen);
      return (

        <div>
          
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {this.props.children}
           
          </Modal>
        </div>
      );
    }
  }

  export default ModalPopup;