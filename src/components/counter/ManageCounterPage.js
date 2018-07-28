import React from 'react'
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from '../../actions/counterActions';
import CounterForm from './CounterForm';

export class ManageCounterPage extends React.Component {
  
 
  render() {   
      return (
          <CounterForm
              count={this.props.count}
              isIncrementing={this.props.isIncrementing}
              isDecrementing={this.props.isDecrementing}
              onIncrement={this.props.actions.increment}
              onIncrementAsync={this.props.actions.incrementAsync}
              onDecrement={this.props.actions.decrement}
              onDecrementAsync={this.props.actions.decrementAsync}              
          />
      );
  }
}


//Pull in the React Router context so router is available on this.context.router.
// ManageCoursePage.contextTypes = {
//   router: PropTypes.object
// };







// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter'

// const Counter = props => (
//   <div>
//     <h1>Counter</h1>
//     <p>Count: {props.count}</p>

//     <p>
//       <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
//       <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
//     </p>

//     <p>
//       <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
//       <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
//     </p>

//     <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
//   </div>
// )

//this.props.actions.saveCourse

// function mapStateToProps(state, ownProps) {  
//     console.log('mapStateToProps');
//     console.log(state);
    
   
//     let counter= { counter: { count:0,isIncrementing:false,isDecrementing:false }};


    

//     return {
//         count: counter.count,
//         isIncrementing: counter.isIncrementing,
//         isDecrementing: counter.isDecrementing
//     };
// }

const mapStateToProps = state => (   
    {        
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(courseActions, dispatch)
//     };
// }
const mapDispatchToProps = dispatch =>   ({
    actions: bindActionCreators(counterActions, dispatch)
    }
)


// const mapDispatchToProps = dispatch => bindActionCreators({
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync,
//   changePage: () => push('/about-us')
// }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCounterPage)
