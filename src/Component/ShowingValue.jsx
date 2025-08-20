import React from 'react'
import TodoItem from './TodoItem'
import { useContext } from "react";
import UserContext from "../StoreAllState.jsx";
function ShowingValue() {
  const ContextObj = useContext(UserContext);
  const todoitems = ContextObj.text;
  const handle = ContextObj.handleDelete;
  return (
    <>
      <div className='items-container'>

        {
          todoitems.map((obj) => (

            <TodoItem key={obj.id} todoname={obj.name} tododate={obj.date} handle={() => handle(obj.id)} />
          ))}

      </div>
    </>
  )
}

export default ShowingValue