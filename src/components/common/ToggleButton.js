import React from 'react';
import Switch from "react-switch";
import PropTypes from 'prop-types';

class ToggleButton extends React.Component {

    constructor(props) {
        super(props);          
        this.state = { checked: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        //this.setState({ checked });
        this.setState(function (prevState) {
            return { selected: !prevState.selected };
        });
        this.props.onChange(checked);               
    }



    render() {
        return (
          <label htmlFor="normal-switch">            
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              id="normal-switch"
            />
          </label>
        );
      }
}


ToggleButton.propTypes = {
    onChange: PropTypes.func,
    value : PropTypes.bool
};

export default ToggleButton;