import React from 'react';
import { DropdownList  } from 'react-widgets';



const ComboBoxInput = ({ name, onChange, placeholder, data,  value, error,valueField, textField}) => { 
    return (
        <DropdownList filter            
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
        />
    );
};

export default ComboBoxInput;