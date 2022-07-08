import { useState } from "react"
import { TODO_DATA } from "../../data/data"
import { Task } from "./components/Task"
export const Todo = () => {
    const [todo, setTodo] = useState(TODO_DATA)
    return ( 
        <div>
            Aqui debe estar el componente Task 
            {todo.map((task: any)=>(
                <Task item={task} />
            ))}
        </div>
    )
}