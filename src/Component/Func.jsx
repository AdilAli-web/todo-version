import React, { useState } from 'react'

function Func() {
  let [text, setText] = useState([])
  function onchnges(e) {
    console.log(e);

    if (e.key === 'Enter') {

      let cur = e.target.value
      let newarr = [...text, cur]
      setText(newarr)
    }

  }
  return (
    <div>
      <input type="text" placeholder='add' onKeyDown={onchnges} />

      {text}
    </div>
  )
}

export default Func