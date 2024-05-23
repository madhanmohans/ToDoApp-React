import "./styles.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {

  const itemsList = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];

  return (
    <div className="Application">
      <Header />
      <hr />
      <div className="List"> 
        <ToDoList ToDoItemsList={itemsList} />
      </div>
    </div>
  );
}