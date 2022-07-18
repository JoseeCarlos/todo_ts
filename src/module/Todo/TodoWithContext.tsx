import React, { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Box } from "../../components/layout/Box";
import { Container } from "../../components/layout/Container";
import { Modal } from "../../components/modal";
import { Title } from "../../components/text";
import { TodoContext } from "../../Context/TodoContext";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";

export const Todo: React.FC = () => {
  const {
    todoData,
    setIsModalAddTaskOpen,
    isModalAddTaskOpen,
    addTask
  } = useContext(TodoContext);

  return (
    <Container>
      <Title>Todo.tsx</Title>
      {todoData?.map((task: any) => (
        <Task
          task={task}
          key={task.id}
        />
      ))}
      <Box mt={1}>
        <Button onClick={() => setIsModalAddTaskOpen(true)}>Agregar Tarea</Button>
      </Box>
      <Modal
        isOpen={isModalAddTaskOpen}
        onClose={() => setIsModalAddTaskOpen(false)}
      >
        <AddTask
          onCancel={() => setIsModalAddTaskOpen(false)}
          onAddTask={addTask}
        />
      </Modal>
    </Container>
  )
}