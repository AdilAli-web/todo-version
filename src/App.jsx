import { useState } from "react"
import Head from "./Component/Head"
import Inputs from "./Component/Inputs"
import ShowingValue from "./Component/ShowingValue"
import './Main.css'


function App() {

  let [text, setText] = useState([{
    name: "Adil ALi",
    date: "13/07/2025"
  },
  {
    name: "sharukh khan",
    date: "11/07/2025",

  }

  ])


  function adding(todoname, tododate) {
    setText([...text, {
      name: todoname, date: tododate
    }])

  }
  function handleDelete(names) {
    const Delete = text.filter((item) => item.name !== names)
    setText(Delete)
  }
  return (
    <center>
      <Head />
      <Inputs adding={adding} />
      {text.length === 0 && <p>Welcome to Todo App</p>}

      <ShowingValue handle={handleDelete} todoitems={text} />

    </center>
  )
}

export default App
