import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'reactstrap';


const LabelInput = ({ name, label }) => {
    return (        
            <Label htmlFor={name}>{label}</Label>        
    );
};

LabelInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired   
};

export default LabelInput;
