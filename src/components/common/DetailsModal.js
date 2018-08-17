import React from 'react';

import {
    Badge,
    ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import DetailButtonToolbar from '../common/DetailButtonToolbar';
import ModalPopup from '../common/ModalPopup';

class DetailsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: this.props.modalIsOpen
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            modalIsOpen: nextProps.modalIsOpen
        })

    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <ModalPopup modalIsOpen={this.state.modalIsOpen} size='lg'>
                    <ModalHeader >          
                        <Badge color="info">{this.props.badgeHeader}</Badge>
                        <div>                            
                            {this.props.modalHeader}
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                        <DetailButtonToolbar onSave={this.props.onSave} onCancel={this.props.onCancel} />
                    </ModalFooter>
                </ModalPopup>
            </div>
        );
    }
}

export default DetailsModal;