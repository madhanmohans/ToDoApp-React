import "./styles.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div className="Application">
      <Header />
      <hr />
      <div className="List"> 
        <ToDoList/> 
      </div>
    </div>
  );
}