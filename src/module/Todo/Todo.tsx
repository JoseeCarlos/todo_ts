import React,{useMemo} from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { Box } from "../../components/layout/Box";
import { Container } from "../../components/layout/Container";
import { Modal } from "../../components/modal";
import { Title } from "../../components/text";
import { RootState } from "../../redux/configureStore";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
import { addTask, setIsModalAddTaskOpen } from '../../redux/todo'
import { useDispatch } from "react-redux";
import { TaskType } from "../../types/Task";
import { Text } from "../../components/text"

export const Todo: React.FC = () => {
  const { todoData, isModalAddTaskOpen } = useSelector((s: RootState) => s.todo);
  const dispatch = useDispatch()
  
  const [taskCompleted, setTaskCompleted] = React.useState(0);
  const [taskIncompleted, setTaskIncompleted] = React.useState(0);


  useMemo(() => {
    const countCompleted = todoData.filter((task: { completed: any; }) => task.completed).length;
    const countIncompleted = todoData.filter((task: { completed: any; }) => !task.completed).length;
    setTaskCompleted(countCompleted);
    setTaskIncompleted(countIncompleted);
  }
  , [todoData])
  
  return (
    <Container>
      <Title>Todo.tsx</Title>
      {todoData?.map((task: any) => (
        <Task
          task={task}
          key={task.id}
        />
      ))}
      {todoData?.length === 0 && (
        <Box>
          <Title>No hay Tareas</Title>
        </Box>
      )}
     
      <Box mt={1}>
        <Button onClick={() => dispatch(setIsModalAddTaskOpen(true))}>Agregar Tarea</Button>
      </Box>
      <Box>
       <h1 style={{ color:'gray' }} >Tareas Completadas: {taskCompleted}</h1>
       <h1 style={{ color:'gray' }} >Tareas Incompletas: {taskIncompleted}</h1>
      </Box>
      <Modal
        isOpen={isModalAddTaskOpen}
        onClose={() => dispatch(setIsModalAddTaskOpen(false))}
      >
        <AddTask
          onCancel={() => dispatch(setIsModalAddTaskOpen(false))}
          onAddTask={(task: TaskType) => dispatch(addTask(task))}
        />
      </Modal>
        
    </Container>
  )
}