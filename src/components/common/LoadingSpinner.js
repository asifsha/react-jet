import React from 'react';
import PropTypes from 'prop-types';
import BlockUi from 'react-block-ui';

import 'react-block-ui/style.css';


class LoadingSpinner extends React.Component {
   render() {
        return (
            <div>
                <BlockUi tag={this.props.tag} blocking={this.props.loading} >
                    {this.props.children}
                </BlockUi>
            </div>
        );
    }
}

LoadingSpinner.propTypes = {
    loading: PropTypes.bool.isRequired

};

export default LoadingSpinner;
