import React from 'react'
import PropTypes from 'prop-types'
import HugeForm from '../../../forms/HugeForm'

export const Counter = ({ counter, increment, doubleAsync, submit }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter.counter}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
    <hr/>
    <HugeForm onSubmit={ submit }/>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
