import React from 'react';
import PropTypes from 'prop-types';
import { NumberPicker } from 'react-widgets';
import simpleNumberLocalizer from 'react-widgets-simple-number';

const NumberInput = ({ name, onChange, defaultValue, value, error }) => {
    simpleNumberLocalizer();
    return (
        <NumberPicker
            max={100000}
            min={0}
            defaultValue={defaultValue}            
            onChange={onChange}
            value={value}
            invalid={error}          
        />
    );
};

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,    
    defaultValue: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.string
};

export default NumberInput;
