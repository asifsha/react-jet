
import React, { Component } from 'react';
import Grid from '../common/Grid';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as itemActions from '../../actions/itemActions';
import PropTypes from 'prop-types';
import ButtonToolbar from '../common/ButtonToolbar';
import ModalPopup from '../common/ModalPopup';
import toastr from 'toastr';
//import {createHistory } from 'history/createBrowserHistory';
import history from '../../store/store';
import { withRouter } from 'react-router-dom';
import DynamicButtonToolbar from '../common/DynamicButtonToolbar';


class Item extends Component {

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state= { modalIsOpen : false};
      }

    componentDidMount() {
        this.props.actions.GetItems();
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
                <ModalPopup modalIsOpen={this.state.modalIsOpen}>
                      <div>in content</div>  
                </ModalPopup>
            </div>
        );
    }
}

Item.propTypes = {
    items: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        items: state.items
    };
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(itemActions, dispatch)
}
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item )
