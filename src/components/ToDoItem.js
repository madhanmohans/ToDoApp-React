import { useState } from "react"

export default function ToDoItem({item}) {
    const [isItemDone, setItemDone] = useState(false);

    function handleClick() {
        setItemDone(!isItemDone);
    }

    return (
        <li onClick={ handleClick } style={ { cursor: 'pointer'}}>
            {
                isItemDone? <s> {item} </s> : item
            }
        </li>
    )
}