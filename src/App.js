import "./styles.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { useState, useTransition } from "react";

export default function App() {

  const [itemsList, setItemsList] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
  const [isListEmpty, setisListEmpty] = useState(false);

  let status;

  function handleClick() {
    setItemsList([]);
    setisListEmpty(true);
  }

  if(isListEmpty) status = "Nothing to do buddy. Sleep!";

  return (
    <div className="Application">
      {console.log(itemsList)}
      <Header />
      <hr />
      <span><i> {status} </i></span>
      <div className="List"> 
        <ToDoList ToDoItemsList={itemsList} />
      </div>
      <hr />
      <button onClick={handleClick}> Empty </button>
    </div>
  );
}