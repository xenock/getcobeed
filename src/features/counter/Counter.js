import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loading, unloading, doingSomething, isLoading } from './counterSlice'
import './Counter.scss'

export function Counter () {
  const count = useSelector(isLoading)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='row'>
        <span className='value'>{count}</span>
        <button
          className='button'
          aria-label='Increment value'
          onClick={() => dispatch(loading())}
        >
          +
        </button>
        <button
          className='button'
          aria-label='Decrement value'
          onClick={() => dispatch(unloading())}
        >
          -
        </button>
        <button
          className='button'
          aria-label='Decrement value'
          onClick={() => dispatch(doingSomething('Doing interesting things'))}
        >
          Do something
        </button>
      </div>
    </div>
  )
}
