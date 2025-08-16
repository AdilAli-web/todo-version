import React from 'react'
import './input.css'
function Inputs({ adding, tasks, task }) {
  return (
    <>
      <div className='center-container'>

        < div className="row">
          <div className="col">
            <input type="text" placeholder='Write here ' value={task.name} onChange={(e) => tasks({ ...task, name: e.target.value })} />

          </div>
          <div className="col">
            <input type="date" />
          </div>
          <div className="col col-lg-3">
            <button className='btn btn-success btns' onClick={adding} >Add</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Inputs