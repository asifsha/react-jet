import React, { Component } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ButtonToolbar = ({onAdd,onEdit,onDelete}) => (
    <ButtonGroup>
        <Button color="danger"  onClick={onAdd}>Add</Button>
        <Button color="primary" onClick={onEdit}>Edit</Button>
        <Button color="primary" onClick={onDelete}>Delete</Button>
    </ButtonGroup>
)

ButtonToolbar.propTypes = {    
    onAdd: PropTypes.func.isRequired,    
    onEdit: PropTypes.func.isRequired,   
    onDelete:PropTypes.func.isRequired  
    
  };
export default ButtonToolbar;