
import React, { Component } from 'react';
import Grid from '../common/Grid';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gridActions from '../../actions/gridActions';
import PropTypes from 'prop-types';

// export default () => (
//   <div>
//     <h1>About Us</h1>
//     <p>Hello Medium!</p>
//   </div>
// )

class App extends Component {
  state = {
    response: '',
    data: []
  };

  componentDidMount() {
    this.props.actions.GetData();

    // console.log(this.state);
    // console.log('1');
    // console.log(this.props.data);
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));

    // this.callData()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));
  }

  // callApi = async () => {
  //   const response = await fetch('/api/Hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  // callData = async () => {
  //   const response = await fetch('/api/Data');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   console.log(body.express);
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <div>
          <Grid data={this.props.data}
            columns={[{
              dataField: 'id',
              text: 'id',
              sort: true              
            },{
              dataField: 'firstName',
              text: 'First Name',
              sort: true              
            }, {
              dataField: 'lastName',
              text: 'Last Name',
              sort: true
            }, {
              dataField: 'status',
              text: 'Status',
              sort: true
            }, {
              dataField: 'visits',
              text: 'Visits'
            }, {
              dataField: 'age',
              text: 'Age'
            }]} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array
};

// const mapStateToProps = state => (
//   {

//     response: state.response,    
//     data: state.grid.data
//   })

function mapStateToProps(state, ownProps) {
  return {
    data: state.grid
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(gridActions, dispatch)
}
)

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
