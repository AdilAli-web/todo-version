import React, { useRef } from 'react'
import './input.css'
import { useContext } from "react";
import UserContext from "../StoreAllState.jsx";

import { IoIosAddCircleOutline } from "react-icons/io";
function Inputs() {
  const ContextObj = useContext(UserContext);
  const adding = ContextObj.addings;
  const username = useRef()
  const userdate = useRef()

  function addings() {
    const value = username.current.value
    const dates = userdate.current.value
    username.current.value = ''
    userdate.current.value = ''
    adding(value, dates)


  }
  return (
    <>
      <div className='center-container'>

        < div className="row">
          <div className="col">
            <input type="text" placeholder='Write here ' ref={username} />

          </div>
          <div className="col">
            <input type="date" ref={userdate} />
          </div>
          <div className="col col-lg-3">
            <button className='btn btn-success btns' onClick={addings} ><IoIosAddCircleOutline />
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Inputs