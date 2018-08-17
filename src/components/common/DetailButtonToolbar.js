import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const DetailButtonToolbar = ({onSave,onCancel}) => (
    <div >
    <ButtonGroup>
        <Button color="warning"  onClick={onSave}>Save</Button>
        <Button color="info" onClick={onCancel}>Cancel</Button>        
    </ButtonGroup>
    </div>
)

DetailButtonToolbar.propTypes = {    
    onSave: PropTypes.func.isRequired,    
    onCancel: PropTypes.func.isRequired        
    
  };
export default DetailButtonToolbar;