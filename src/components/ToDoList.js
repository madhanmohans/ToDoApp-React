import ToDoItem from "./ToDoItem"

export default function ToDoList({ToDoItemsList}) {
    return (
        <>
            {ToDoItemsList.map((item) => (
                <ToDoItem item={item} key={item}/>
            ))}
        </>
    )
}