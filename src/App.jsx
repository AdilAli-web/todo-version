import { useState } from "react"
import Head from "./Component/Head"
import Inputs from "./Component/Inputs"
import ShowingValue from "./Component/ShowingValue"
import UserContext from "./StoreAllState.jsx"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Main.css'


function App() {

  let [text, setText] = useState([])



  function adding(todoname, tododate) {
    setText([
      ...text,
      {
        id: Date.now(),
        name: todoname,
        date: tododate
      }
    ]);

    toast.success("Todo added!");

  }
  function handleDelete(id) {
    console.log('id', id);

    const DeleteNewArr = text.filter((item) => item.id !== id)
    setText(DeleteNewArr)
    toast.error("Todo Deleted!");
  }
  return (
    <UserContext.Provider value={{ text: text, addings: adding, handleDelete: handleDelete }}>

      <center>
        <Head />
        <Inputs />
        {text.length === 0 && <p>Welcome to Todo App</p>}


        <ShowingValue />
        <ToastContainer />
      </center>
    </UserContext.Provider>
  )
}

export default App
