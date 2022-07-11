import React, {useState} from "react";
import {Container} from "../../components/layout/Container";
import {Title} from "../../components/text";
import { TODO_DATA } from "../../data/data";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Task } from "./components/Task";


export const Todo: React.FC = () => {
    const {item: todo, saveItem} = useLocalStorage("todo", TODO_DATA);
    
    const onClickTaskCompleted = (id: any, completed: any) => {
        var data = JSON.parse(localStorage.getItem("todo") || "[]");
        data.forEach((task: any) => {
            if (task.id === id) {
                if (completed===false) {
                    task.completed = true;
                }else
                {
                    task.completed = false;
                }
            }else
              throw new Error("Tarea no seleccionada");
        }
        )
        localStorage.setItem("todo", JSON.stringify(data));
        window.location.reload();
    }
    return (
        <Container>
            <Title>Todo.tsx</Title>
            {todo.map((task: any)=>(
                <Task task={task} key={task.id}
                onClickTaskCompleted={()=> onClickTaskCompleted(task.id,task.completed)}
                onClickStepCompleted={(value) => {console.log(`on Step Completed`, value)}}
                />
            ))}
        </Container>

        )
}
