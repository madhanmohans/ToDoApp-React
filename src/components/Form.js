import { useState } from "react";

export default function Form({onAddTask}) {
    // Create a form (input field with a button) to add new tasks to the list.

    const [newTask, setNewTask] = useState("");

    function handleAddTask() {
        if(newTask.trim() !== "") {
            onAddTask(newTask);
            setNewTask("");
        }
    }
    return(
        <>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
                />
            <button onClick={handleAddTask}>Add Task</button>
        </>
    )   
}