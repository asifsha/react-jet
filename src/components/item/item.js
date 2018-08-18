
import React, { Component } from 'react';
import Grid from '../common/Grid';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as itemActions from '../../actions/itemActions';
import PropTypes from 'prop-types';
import DetailsModal from '../common/DetailsModal';
import DynamicButtonToolbar from '../common/DynamicButtonToolbar';
import ToastrPopup from '../common/ToastrPoup';
import ItemDetailsForm from './itemDetailsForm';
import { Container, Badge } from 'reactstrap';



class Item extends Component {

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.closeDetailsModal = this.closeDetailsModal.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.state = { modalIsOpen: false, item: {} };

        this.detailModal = React.createRef();
        this.itemDetailsGrid = React.createRef();
    }

    saveItem(item) {
        console.log('in saveitem parent');
        return this.props.actions.saveItem(item);
    }

    onSave = () => {
        console.log('in save');
        this.detailModal.current.onSave();
    };

    onCancel = () => {
        console.log('in cancel');

        this.detailModal.current.onCancel();

    };

    componentDidMount() {
        this.props.actions.GetItems();
    }

    closeDetailsModal() {
        this.setState({ modalIsOpen: false });
    }

    onAdd(event) {
        event.preventDefault();
        let item = { id: -1, name: '', date: '', price: 0, inStock: false, type: '' };
        this.setState({ modalIsOpen: true, item: item });
    }

    onEdit() {
        let selectedids = this.itemDetailsGrid.current.state.selectedRows;
        if (selectedids.length !== 1) {
            ToastrPopup.info('Please select one record to edit.');
            return;
        }
        let item = getItemById(this.props.items, selectedids[0]);
        console.log(item);
        this.setState({ modalIsOpen: true, itemId: 1, item: item });
        this.itemDetailsGrid.current.setState({ selectedRows: [] });
    }

    onDelete() {
        let selectedids = this.itemDetailsGrid.current.state.selectedRows;
        if (selectedids.length !== 1) {
            ToastrPopup.info('Please select one record to delete.');
            return;
        }
        let item = getItemById(this.props.items, selectedids[0]);
        this.props.actions.deleteItem(this.state.item)
            .then(() => this.refreshGrid())
            .catch(error => {
                ToastrPopup.error(error);
                this.setState({ saving: false });
            });
    }
    render() {
        console.log('in item render');
        console.log(this.state.modalIsOpen);
        //let item = { id: '', name: '', date: '', price: 0, inStock: false, type: '' };
        return (
            <Container >
                <header className="App-header">
                    <h2 className="App-title"><Badge color="info">Items</Badge></h2>

                </header>
                <DynamicButtonToolbar buttons={[{
                    id: 'btnadd',
                    text: 'Add',
                    style: 'warning',
                    handler: this.onAdd
                },
                {
                    id: 'btnedit',
                    text: 'Edit',
                    style: 'info',
                    handler: this.onEdit
                },
                {
                    id: 'btnDelete',
                    text: 'Delete',
                    style: 'info',
                    handler: this.onDelete

                }]} />
                <div>
                    <Grid ref={this.itemDetailsGrid} data={this.props.items}
                        columns={[{
                            dataField: 'id',
                            text: 'ID',
                            sort: true,
                            hidden: true
                        }, {
                            dataField: 'name',
                            text: 'Item Name',
                            sort: true
                        }, {
                            dataField: 'price',
                            text: 'Item Price',
                            sort: true
                        }, {
                            dataField: 'inStockStr',
                            text: 'In Stock'
                        }, {
                            dataField: 'type',
                            text: 'Type'
                        }]} />
                </div>
                <DetailsModal modalIsOpen={this.state.modalIsOpen} badgeHeader={this.state.item.id === -1 ? "Add - Item" : "Edit Item"}
                    modalHeader={this.state.item.id === -1 ? "New Item" : this.state.item.name}
                    onSave={this.onSave}
                    onCancel={this.onCancel}
                >
                    <div><ItemDetailsForm ref={this.detailModal} item={this.state.item} closeHandler={this.closeDetailsModal} saveItem={this.saveItem} /></div>
                </DetailsModal>
            </Container>
        );
    }
}

Item.propTypes = {
    items: PropTypes.array
};

// function mapStateToProps(state, ownProps) {
//     return {
//         items: state.items
//     };
// }

function getItemById(items, id) {
    const item = items.filter(item => item.id === id);
    if (item) return item[0]; //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    const itemId = ownProps.match.params.id; // fomr the path course/:id
    let item = { id: '', name: '', date: '', price: 0, inStock: false, type: '' };

    if (itemId && state.items.length > 0) {
        item = getItemById(state.items, itemId);
    }
    console.log('mapstatetoprops');
    console.log(item);
    return {
        itemTypes: state.itemTypes,
        item: item,
        items: state.items
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(itemActions, dispatch)
}
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)
