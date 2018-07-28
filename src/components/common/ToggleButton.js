import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';


class ToggleButton extends React.Component {

    constructor() {
        super();

        this.state = {
            selected: false
        };

        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onCheckboxBtnClick() {
        // let selected = this.state.selected;
        // selected = !selected;
        //console.log(this.state.selected);
        // this.setState({ selected: selected });
        this.setState(function (prevState) {
            return { selected: !prevState.selected };
        });

        this.props.onChange();
        //console.log(this.state.selected);
    }



    render() {
        return (

            <ButtonGroup>
                <Button color={this.state.selected ? 'info' : 'light'} onClick={() => this.onCheckboxBtnClick(true)} active={this.state.selected}>Yes</Button>
                <Button color={!this.state.selected ? 'info' : 'light'} onClick={() => this.onCheckboxBtnClick(false)} >No</Button>
            </ButtonGroup>

        );

    }
}


ToggleButton.propTypes = {
    onChange: PropTypes.func,
    value : PropTypes.bool
};

export default ToggleButton;
