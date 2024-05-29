export default function ToDoItem({item, index, onItemClicked}) {
    
    return (
        <li className="todo-item" onClick={ () => onItemClicked(index) }>
            {
                item.isDone? <s> {item.text} </s> : <span>{item.text}</span>
            }
        </li>
    )
}