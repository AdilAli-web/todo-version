import React from 'react'
import './input.css'
import { MdDelete } from "react-icons/md";
function TodoItem({ todoname, tododate, handle }) {

  return (
    <>
      <div className="row ba">
        <div className="col-sm">{todoname}</div>
        <div className="col-sm">{tododate}</div>
        <div className="col-sm">
          <button className='btn btn-danger m-margin' onClick={handle}  ><MdDelete /></button>
        </div>
      </div>


    </>
  )
}

export default TodoItem