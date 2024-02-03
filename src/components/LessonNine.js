import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, SUB } from '../redux/counterSlice'


function LessonNine() {
    const counterObj = useSelector(store=>store.countMan.counter)
    const dispatch = useDispatch()
    
    // addNumber
    const addNumber = ()=>{
        dispatch(ADD())
    }

    // subNumber
    const subNumber = ()=>{
        dispatch(SUB())
    }

  return (
    <div className='container mt-5 p-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
            <div className='card shadow'>
                <div className='card-body'>
                    <h1 className='text-center'>{counterObj}</h1>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary mr-4' onClick={addNumber}>ADD</button>
                        <button className='btn btn-danger' onClick={subNumber}>MINUS</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LessonNine
