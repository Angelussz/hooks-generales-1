import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHooks = () => {
    const {counter, increment,decrement,reset} = useCounter(1)
    // console.log(counter)
  return (
    <>
    <h1>Counter with hook: {counter}</h1>
    <hr />
    <button className='btn btn-primary' onClick={()=>{decrement()}} >-1</button>
    <button className='btn btn-primary' onClick={()=>{reset()}} >reset</button>
    <button className='btn btn-primary' onClick={()=>{increment()}} >+1</button>
    </>
  )
}
