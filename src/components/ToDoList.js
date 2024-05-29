import ToDoItem from "./ToDoItem"

export default function ToDoList({ToDoItemsList, onItemClicked, onDeleteTask}) {
    return (
        <ul className="todo-list">
            {ToDoItemsList.map((item, index) => (
                <ToDoItem 
                    item={item} 
                    key={index}
                    index={index}
                    onItemClicked={onItemClicked}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    )
}