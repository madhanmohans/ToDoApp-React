import ToDoItem from "./ToDoItem"

export default function ToDoList({ToDoItemsList, onItemClicked}) {
    return (
        <ul className="todo-list">
            {ToDoItemsList.map((item, index) => (
                <ToDoItem 
                    item={item} 
                    key={index}
                    index={index}
                    onItemClicked={onItemClicked}
                />
            ))}
        </ul>
    )
}