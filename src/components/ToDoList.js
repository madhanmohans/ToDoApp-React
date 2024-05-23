import ToDoItem from "./ToDoItem"

export default function ToDoList({ToDoItemsList, onItemClicked}) {
    return (
        <>
            {ToDoItemsList.map((item, index) => (
                <ToDoItem 
                    item={item} 
                    key={index}
                    index={index}
                    onItemClicked={onItemClicked}
                />
            ))}
        </>
    )
}