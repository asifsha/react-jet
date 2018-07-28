import React from 'react';
import { Route } from 'react-router-dom'
import ManageCounterPage from '../counter/ManageCounterPage'
import About from '../about';
import Header from '../common/Header';
import Item from '../item/item';
import ItemDetails from '../item/itemDetails';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';



const App = () => (
  <div>
    <header>     
        <Header/>
    </header>

    <main>
      <Route exact path="/" component={ManageCounterPage} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/items" component={Item} />
      <Route exact path="/itemDetails" component={ItemDetails} />
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