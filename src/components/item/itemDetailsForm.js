import React from 'react';

import { Form, FormGroup,  
     Col} from 'reactstrap';


import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import LabelInput from '../common/LabelInput';
import NumberInput from '../common/NumberInput';
import ComboBoxInput from '../common/ComboBoxInput';
import LoadingSpinner from '../common/LoadingSpinner';
import ToastrPopup from '../common/ToastrPoup';
import ToggleButton from '../common/ToggleButton';
import validator from '../../helper/validator';
import 'react-widgets/dist/css/react-widgets.css';


import momentLocalizer from 'react-widgets-moment';


class ItemDetailsForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            item: Object.assign({}, this.props.item),
            errors: {},
            saving: false,
            isToggle: false,            
            itemTypes: []            
        };

        this.onSave = this.onSave.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleinStockChange = this.handleinStockChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
        momentLocalizer();   

    }
  
    onSave() {
         
        if (this.itemFormInValid()) {
            return;
        }
        this.setState({ saving: true });       
        this.props.saveItem(this.state.item)
            .then(() => this.onCancel())
            .catch(error => {
                ToastrPopup.error(error);
                this.setState({ saving: false });
            });
    }

    onCancel() {
        this.props.closeHandler();
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
    }

    handleNumberChange(e) {
        let item = this.state.item;
        item.price = e;
        this.setState({ item: item });        
    }

    handleChange(e) {        
        const name = e.target.name;        
        let item = this.state.item;
        if (name === 'txtName')
            item.name = e.target.value;
        if (name === 'txtPrice')
            item.price = e.target.value;
        this.setState({ item: item });        
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
                                 <ToggleButton value={this.state.item.inStock} onChange={this.handleinStockChange}></ToggleButton>
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
                                <DateInput name="dpDate" defaultValue={this.state.item.date} onChange={this.handleDateChange} />                                
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