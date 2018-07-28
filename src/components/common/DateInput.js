import React from 'react';
import PropTypes from 'prop-types';
import { Label, Col, FormGroup, Input, Form, Row } from 'reactstrap';
import { Combobox, DateTimePicker } from 'react-widgets';

const DateInput = ({ name, onChange, defaultValue, error }) => {  

    return (        
            <DateTimePicker name={name} onChange={onChange} defaultValue={defaultValue}  time={false} invalid
            className="App-invalidcontrol App-invalid" />       
    );
};

DateInput.propTypes = {
    name: PropTypes.string.isRequired,    
    onChange: PropTypes.func,    
    defaultValue: PropTypes.any,
    error: PropTypes.string
};

export default DateInput;
