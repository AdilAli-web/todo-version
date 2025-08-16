import { useState } from "react"
import Head from "./Component/Head"
import Inputs from "./Component/Inputs"
import ShowingValue from "./Component/ShowingValue"
import './Main.css'
import Func from "./Component/Func"

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
  let [task, setTask] = useState({ name: "", date: "" })

  function adding() {
    if (task.name.trim() === "") return;
    let oldarr = [...text, task]
    setText(oldarr)
    setTask("")


  }
  return (
    <center>
      <Head />
      <Inputs adding={adding} tasks={setTask} task={task} />

      <ShowingValue todoitems={text} />
      <Func />
    </center>
  )
}

export default App
