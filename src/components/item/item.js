
import React, { Component } from 'react';
import Grid from '../common/Grid';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as itemActions from '../../actions/itemActions';
import PropTypes from 'prop-types';
import ButtonToolbar from '../common/ButtonToolbar';
import DetailsModal from '../common/DetailsModal';
import toastr from 'toastr';
//import {createHistory } from 'history/createBrowserHistory';
import history from '../../store/store';
import { withRouter } from 'react-router-dom';
import DynamicButtonToolbar from '../common/DynamicButtonToolbar';
import ItemDetailsForm from './itemDetailsForm';


class Item extends Component {

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
      this.closeDetailsModal=this.closeDetailsModal.bind(this);
      this.saveItem=this.saveItem.bind(this);
        this.state= { modalIsOpen : false};

        this.detailModal = React.createRef();
      }
  
  saveItem(item)
  {
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
  
  closeDetailsModal()
{
  this.setState({modalIsOpen: false});
}

    onAdd(event) {          
        event.preventDefault();        
        //this.props.history.push('/itemDetails');
        console.log('in add click');
        this.setState({modalIsOpen: true});
        
      }

    onEdit() {
        //createHistory .push('/course');
      }    
      
      onDelete() {
        //createHistory .push('/course');
      }  

      myHandler() {
          toastr.success('Good');
      }

    render() {
        console.log('in item render');
        console.log(this.state.modalIsOpen);
        //let item = { id: '', name: '', date: '', price: 0, inStock: false, type: '' };
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Items</h1>
                </header>
                <DynamicButtonToolbar buttons={[{
                    id: 'btnadd',
                    text: 'Add', 
                    style:'warning', 
                    handler:this.onAdd 
                    },
                    {
                    id: 'btnedit',
                    text: 'Edit', 
                    style:'info',
                    handler:this.onEdit                    
                    },
                    {
                    id: 'btnDelete',
                    text: 'Delete', 
                    style:'info',
                    handler:this.onDelete
                    
                    }]}/>                  
                <div>
                    <Grid data={this.props.items}
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
                            text: 'inStock'
                        }, {
                            dataField: 'type',
                            text: 'type'
                        }]} />
                </div>               
                <DetailsModal  modalIsOpen={this.state.modalIsOpen} badgeHeader="Add - Item"
                 modalHeader="New Item"
                 onSave={this.onSave}
                 onCancel={this.onCancel}
                 
                 
                 >
                      <div><ItemDetailsForm ref={this.detailModal} item={this.props.item} closeHandler={this.closeDetailsModal} saveItem={this.saveItem}/></div>  
                </DetailsModal>
            </div>
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
    const item = items.filter(item => item.id == id);
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
