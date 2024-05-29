export default function ToDoItem({item, index, onItemClicked, onDeleteTask}) {
    
    return (
        <div className="todo-item-row">
            <li className="todo-item" onClick={ () => onItemClicked(index) }>
                {item.isDone? <s> {item.text} </s> : <span>{item.text}</span>}
            </li>
            <span className="delete-button" onClick={() => onDeleteTask(index) }> X </span>
        </div>
    )
}