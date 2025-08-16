import React from 'react'
import TodoItem from './TodoItem'

function ShowingValue({ todoitems }) {
  return (
    <>
      <div className='items-container'>

        {
          todoitems.map((obj) => (

            <TodoItem todoname={obj.name} tododate={obj.date} />
          ))}

      </div>
    </>
  )
}

export default ShowingValue