
import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as itemActions from '../../actions/itemActions';
import PropTypes from 'prop-types';


import { Button, Form, FormGroup, ControlLabel, HelpBlock, FormControl, Col, Checkbox, Label, Input } from 'reactstrap';
import { Combobox, DateTimePicker } from 'react-widgets';
import Switch from 'react-bootstrap-switch';

import Grid from '../common/Grid';
import DetailButtonToolbar from '../common/DetailButtonToolbar';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import LabelInput from '../common/LabelInput';
import NumberInput from '../common/NumberInput';
import ToggleButton from '../common/ToggleButton';
import ComboBoxInput from '../common/ComboBoxInput';
import ToggleInput from '../common/ToggleInput';
import LoadingSpinner from '../common/LoadingSpinner';
import ToastrPopup from '../common/ToastrPoup';
import serviceApi from '../../api/serviceApi';
import validator from '../../helper/validator';
import ModalPopup from '../common/ModalPopup';
//import toastr from 'toastr';

import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

//import 'toastr/build/toastr.css';
import 'react-widgets/dist/css/react-widgets.css';

import history from '../../store/store';

class ItemDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            item: Object.assign({}, this.props.item),
            errors: {},
            saving: false,
            isToggle: false,
            cSelected: [],
            itemTypes: [],
            count: 1,
            loading : false
        };
        this.onSave = this.onSave.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { toggleActive: false };
        this.toggleActive = this.toggleActive.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleinStockChange = this.handleinStockChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
        this.handleloadingChange=this.handleloadingChange.bind(this);
        ///Globalize.locale('en');
        //globalizeLocalizer();
        //Moment.locale('en');
        momentLocalizer();      
        

    }
    handleSwitch(elem, state) {
        console.log('handleSwitch. elem:', elem);
        console.log('name:', elem.props.name);
        console.log('new state:', state);
    }
    componentDidMount() {
        this.props.actions.GetItems();
        this.props.actions.GetItemTypes();
    }

    onSave(event) {
        //ToastrPopup.clear();
        event.preventDefault();
        //ModalPopup.openModal();
       
        if (this.itemFormInValid()) {
            return;
        }
        this.setState({ saving: true });      
        this.props.actions.saveItem(this.state.item)
            .then(() => this.redirect())
            .catch(error => {
                ToastrPopup.error(error);
                this.setState({ saving: false });
            });
    }

    itemFormInValid() {
        let formInvalid = false;
        let errors = {};    
        errors.title='';

        if (validator.validateRequired(this.state.item.name)) {
            errors.title = '<br/>Please enter name.';
            formInvalid = true;
        }
        if (validator.validateRequired(this.state.item.price) || validator.validateIntegerWithMin(this.state.item.price,1)) {
            errors.title += '<br/>Please enter valid price.';
            formInvalid = true;
        }
        if (validator.validateIntegerWithMinMax(this.state.item.inStock, 1, 2)) {
            errors.title += '<br/>Please select in stock.';
            formInvalid = true;
        }
        
        if (validator.validateRequired(this.state.item.type)) {
            errors.title  += '<br/>Please select a type.';
            formInvalid = true;
        }      
       
        if (validator.validateRequired(this.state.item.date)) {
            errors.title += '<br/>Please enter valid date.';
            formInvalid = true;
        }                   

        if(formInvalid)
        {
            errors.title=errors.title.substring(5);
            ToastrPopup.error(errors.title);
        }

        this.setState({ errors: errors });

        
        return formInvalid;
    }

    handleloadingChange()
    {
        console.log('in loading change');
        this.setState({loading : !this.state.loading});
    }


    onCancel() {
        this.redirect();
    }

    redirect() {
        this.setState({ saving: false });
        //toastr.success('Item saved');
        this.props.history.push('/items');
    }

    handleinStockChange(e) {
        let item = this.state.item;
        item.inStock = e.id;
        this.setState({ item: item });
        console.log(this.state);
    }

    handleTypeChange(e) {
        let item = this.state.item;
        item.type = e.id;
        this.setState({ item: item });
        console.log(this.state);
    }

    handleDateChange(e) {
        let item = this.state.item;
        item.date = e.toLocaleDateString();
        this.setState({ item: item });
        console.log(this.state);
        console.log(e.toLocaleDateString());
    }

    handleNumberChange(e) {
        let item = this.state.item;
        item.price = e;
        this.setState({ item: item });
        console.log(this.state);
    }

    handleChange(e) {
        console.log(' in handle change');
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        let item = this.state.item;
        if (name == 'txtName')
            item.name = e.target.value;
        if (name == 'txtPrice')
            item.price = e.target.value;
        this.setState({ item: item });
        console.log(this.state);
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }

    toggleActive() {
        console.log(this.state);
        this.setState(function (prevState) {
            return {
                isToggleOn: !prevState.isToggleOn,
                count: prevState.count + 1
            };
        });
        console.log('toggle ative');
        console.log(this.state);
    }

    render() {       
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Items</h1>
                </header>
                <LoadingSpinner loading={this.state.saving} tag="div">                                   
                <div>
                    <Form >
                        <FormGroup row >
                            <Col sm={1} className="col-form-label text-right ">
                                <LabelInput name="lblname" label="Name" />
                            </Col>
                            <Col sm={2}>
                                <TextInput name="txtName" value={this.state.item.name} onChange={this.handleChange} error={this.state.IsNameValid} />
                            </Col>
                            <Col sm={1} className="col-form-label text-right ">
                                <LabelInput name="lblPrice" label="Price($)" />
                            </Col>
                            <Col sm={2}>
                                <NumberInput name="txtPrice" value={this.state.item.price} onChange={this.handleNumberChange} error={this.state.IsPriceValid} />
                            </Col>
                        </FormGroup>
                        <FormGroup row >
                            <Col sm={1} className="col-form-label text-right ">
                                <LabelInput name="instock" label="In Stock" />
                            </Col>
                            <Col sm={2}>
                                <ToggleInput data={[{ 'id': 1, 'name': 'Yes' }, { 'id': 2, 'name': 'No' }]} valueField='id' textField='name' onChange={this.handleinStockChange} />
                            </Col>
                            <Col sm={1} className="col-form-label text-right ">
                                <LabelInput name="lblType" label="Type" />
                            </Col>
                            <Col sm={2}>
                                <ComboBoxInput data={this.props.itemTypes} valueField='id' textField='name' onChange={this.handleTypeChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={1} className="col-form-label text-right ">
                                <LabelInput name="lblDate" label="Date" />
                            </Col>
                            <Col sm={2}>
                                <DateInput name="dpDate" onChange={this.handleDateChange} />                                
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                
                <DetailButtonToolbar onSave={this.onSave} onCancel={this.onCancel} />
                </LoadingSpinner>

            </div>
        );
    }
}

// ItemDetails.propTypes = {
//     items: PropTypes.array
// };

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
        item: item
    }
}
// function mapStateToProps(state, ownProps) {
//     return {
//         console.log(state);
//         itemTypes: state.itemTypes
//     };
// }

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(itemActions, dispatch)
}
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails)
