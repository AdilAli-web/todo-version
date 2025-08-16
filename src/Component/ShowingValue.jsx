import React from 'react'
import TodoItem from './TodoItem'

function ShowingValue({ todoitems, handle }) {
  return (
    <>
      <div className='items-container'>

        {
          todoitems.map((obj, index) => (

            <TodoItem key={index} todoname={obj.name} tododate={obj.date} handle={handle} />
          ))}

      </div>
    </>
  )
}

export default ShowingValue