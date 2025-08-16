import React from 'react'
import './input.css'

function TodoItem({ todoname, tododate, handle }) {

  return (
    <>
      <div class="row">
        <div className="col-sm">{todoname}</div>
        <div className="col-sm">{tododate}</div>
        <div className="col-sm">
          <button className='btn btn-danger m-margin' onClick={() => handle(todoname)}  >Delete</button>
        </div>
      </div>


    </>
  )
}

export default TodoItem