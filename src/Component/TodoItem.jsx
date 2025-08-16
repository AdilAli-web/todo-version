import React from 'react'
import './input.css'

function TodoItem({ todoname, tododate }) {
  function del() {
    console.log(`${todoname} is clicked`)


  }
  return (
    <>
      <div class="row">
        <div className="col-sm">{todoname}</div>
        <div className="col-sm">{tododate}</div>
        <div className="col-sm">
          <button className='btn btn-danger m-margin' onClick={del}  >Delete</button>
        </div>
      </div>


    </>
  )
}

export default TodoItem