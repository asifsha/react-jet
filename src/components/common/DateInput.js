import React from 'react';
import PropTypes from 'prop-types';
import { DateTimePicker } from 'react-widgets';

const DateInput = ({ name, onChange, defaultValue, error, value }) => {

    return (
        <DateTimePicker name={name} onChange={onChange} 
        defaultValue={new Date(defaultValue)} time={false}
        
            />
    );
};

DateInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    defaultValue: PropTypes.any,
    error: PropTypes.string    
};

export default DateInput;
