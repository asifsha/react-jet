import React from 'react';

import { Button, Form, FormGroup, ControlLabel, 
    HelpBlock, FormControl, Col, Checkbox, Label, Input,Badge,
    ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import LabelInput from '../common/LabelInput';
import NumberInput from '../common/NumberInput';
import ToggleButton from '../common/ToggleButton';
import ComboBoxInput from '../common/ComboBoxInput';
import ToggleInput from '../common/ToggleInput';
import LoadingSpinner from '../common/LoadingSpinner';
import ToastrPopup from '../common/ToastrPoup';

import validator from '../../helper/validator';

import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';


class ItemDetailsForm extends React.Component {
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
        momentLocalizer();   

    }
    onSave() {
        //ToastrPopup.clear();
       // event.preventDefault();
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

    onCancel() {
        this.redirect();
    }

    itemFormInValid() {
        let formInvalid = false;
        let errors = {};    
        errors.title='';

        console.log(this.state);

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

    render() {
        return (
            <div >          
                <LoadingSpinner loading={this.state.saving} tag="div">                                                   
                <div>
                    <Form >
                        <FormGroup row >
                            <Col sm={2} className="col-form-label text-right ">
                                <LabelInput name="lblname" label="Name" />
                            </Col>
                            <Col sm={4}>
                                <TextInput name="txtName" value={this.state.item.name} onChange={this.handleChange} error={this.state.IsNameValid} />
                            </Col>
                            <Col sm={2} className="col-form-label text-right ">
                                <LabelInput name="lblPrice" label="Price($)" />
                            </Col>
                            <Col sm={4}>
                                <NumberInput name="txtPrice" value={this.state.item.price} onChange={this.handleNumberChange} error={this.state.IsPriceValid} />
                            </Col>
                        </FormGroup>
                        <FormGroup row >
                            <Col sm={2} className="col-form-label text-right ">
                                <LabelInput name="instock" label="In Stock" />
                            </Col>
                            <Col sm={4}>
                                <ToggleInput data={[{ 'id': 1, 'name': 'Yes' }, { 'id': 2, 'name': 'No' }]} valueField='id' textField='name' onChange={this.handleinStockChange} />
                            </Col>
                            <Col sm={2} className="col-form-label text-right ">
                                <LabelInput name="lblType" label="Type" />
                            </Col>
                            <Col sm={4}>
                                <ComboBoxInput data={this.props.itemTypes} valueField='id' textField='name' onChange={this.handleTypeChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2} className="col-form-label text-right ">
                                <LabelInput name="lblDate" label="Date" />
                            </Col>
                            <Col sm={4}>
                                <DateInput name="dpDate" onChange={this.handleDateChange} />                                
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                          
                </LoadingSpinner>

            </div>
        );
    }
}

export default ItemDetailsForm;