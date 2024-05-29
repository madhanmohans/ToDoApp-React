export default function ToDoItem({item, index, onItemClicked}) {
    
    return (
        <li className="todo-item" class onClick={ () => onItemClicked(index) } style={ { cursor: 'pointer'}}>
            {
                item.isDone? <s> {item.text} </s> : item.text
            }
        </li>
    )
}