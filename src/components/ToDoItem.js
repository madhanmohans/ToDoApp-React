export default function ToDoItem({item, index, onItemClicked}) {
    
    return (
        <li onClick={ () => onItemClicked(index) } style={ { cursor: 'pointer'}}>
            {
                item.isDone? <s> {item.text} </s> : item.text
            }
        </li>
    )
}