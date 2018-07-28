import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';
import { ButtonToolbar, Button } from 'reactstrap';

const CounterForm = ({ count, onIncrement, onIncrementAsync, onDecrement, onDecrementAsync, isIncrementing, isDecrementing }) => {
  return (
    <div>
      <h1>Counter</h1>
      <TextInput
        name="CounterValue"
        label="Counter Value"
        value={count}
      />

      <h2>Counter</h2>
      <p>Count: {count}</p>
      <ButtonToolbar>
        <Button
          disabled={isIncrementing}
          className="btn btn-primary"
          color="primary"
          onClick={onIncrement}
        >Increment </Button>

        <Button

          disabled={isIncrementing}
          className="btn btn-primary"
          onClick={onIncrementAsync}>Increment Async</Button>

        <button
          value={'Decrement'}
          disabled={isDecrementing}
          className="btn btn-success"
          onClick={onDecrement}>Decrement</button>

        <button
          value={'Decrement Async'}
          disabled={isDecrementing}
          className="btn btn-success"
          onClick={onDecrementAsync}>Decrement Async</button>
      </ButtonToolbar>
    </div>
  );
};

CounterForm.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired
};

export default CounterForm;
