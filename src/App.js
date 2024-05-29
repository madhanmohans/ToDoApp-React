import "./styles.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {

  const [itemsList, setItemsList] = useState([
    {text: "Read SpringBoot", isDone: false},
    {text: "Complete assignments", isDone: false}, 
    {text: "Prepare breakfast", isDone: false}, 
    {text: "Sleep for 2 hours", isDone: false}, 
    {text: "Take a shower", isDone: false}
  ]);

  /* 
    0: { text: 'Read SpringBoot', isDone: false }
    1: { text: 'Complete assignments', isDone: false }
    2: { text: 'Prepare breakfast', isDone: false }
    3: { text: 'Sleep for 2 hours', isDone: false }
    4: { text: 'Take a shower', isDone: false }
  */

  const [isListEmpty, setisListEmpty] = useState(false);

  let status;
  console.log(itemsList.filter(item => item.isDone))
  function handleRemoveCompleted() {
    setItemsList(itemsList.filter(item => !item.isDone))
    if(itemsList.filter(item => item.isDone).length === itemsList.length) setisListEmpty(true)
  }

  function handleItemClick(index) {
    const newItemsList = itemsList.slice();
    newItemsList[index].isDone = !newItemsList[index].isDone;
    setItemsList(newItemsList)
  }

  function handleAddTask(newTask) {
    setItemsList([...itemsList, { text: newTask, isDone: false}]);
  }

  if(isListEmpty) status = "Nothing to do buddy. Sleep!";

  return (
    <div className="Application">
      <Header />
      <span className="status"><i> {status} </i></span>
      <Form onAddTask={handleAddTask}/>
      <div className="list-container"> 
        <ToDoList ToDoItemsList={itemsList} onItemClicked={handleItemClick} />
      </div>
      <button className="remove-completed" onClick={handleRemoveCompleted}> Remove Completed </button>
    </div>
  );
}