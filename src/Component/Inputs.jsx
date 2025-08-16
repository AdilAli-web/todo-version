import React from 'react'
import './input.css'
import { useState } from 'react'
function Inputs({ adding }) {

  const [value, setValue] = useState('')
  const [dates, setDates] = useState('')

  function handlevalues(e) {
    setValue(e.target.value)
  }
  function handleDates(e) {
    setDates(e.target.value)
  }
  function addings() {
    adding(value, dates)
    setValue("")
    setDates("")

  }
  return (
    <>
      <div className='center-container'>

        < div className="row">
          <div className="col">
            <input type="text" placeholder='Write here ' value={value} onChange={handlevalues} />

          </div>
          <div className="col">
            <input type="date" value={dates} onChange={handleDates} />
          </div>
          <div className="col col-lg-3">
            <button className='btn btn-success btns' onClick={addings} >Add</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Inputs