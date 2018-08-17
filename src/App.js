import React from 'react';
import { Route } from 'react-router-dom'
import About from './components/about';
import Header from './components/common/Header';
import Item from './components/item/item';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';



const App = () => (
    <div>
        <header>
            <Header />
        </header>

        <main>
            <Route exact path="/" component={Item} />
            <Route exact path="/about-us" component={About} />
        </main>
    </div>
)

function mapStatesToProps(state, ownProps) {
    return {
        items: state.items
    };
}

const mapDispatchToProps = dispatch => ({
    // actions: bindActionCreators(itemActions, dispatch)
}
)

export default withRouter(connect(mapStatesToProps, mapDispatchToProps)(App));