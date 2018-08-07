import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';


class DynamicButtonToolbar extends React.Component {

    render() {
       var buttonsItems = this.props.buttons.map(function (button) {
            return (
                <Button key={button.id} id={button.id} color={button.style} onClick={button.handler}>{button.text}</Button>            );
        });
        return(
        <ButtonGroup>
            {buttonsItems}
        </ButtonGroup>
        )
    }
}

export default DynamicButtonToolbar;


