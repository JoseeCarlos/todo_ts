import { createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../types/Task';
import { uuid } from '../../utils';
import { getItem, saveItem } from '../../utils/localStorage';

const ITEM_NAME = 'TODO_TS_REDUX'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoData: getItem(ITEM_NAME, []),
    isModalAddTaskOpen: false,
  },
  reducers: {
    addTask: (state: any, action: any) => {
      state.todoData =  [...state.todoData, action.payload];
      state.isModalAddTaskOpen = false;
      saveItem(ITEM_NAME, state.todoData);
    },
    removeTask: (state: any, action: any) => {
      const {idTask} = action.payload
      state.todoData = state.todoData.filter(((task: TaskType) => task.id !== idTask))
      saveItem(ITEM_NAME, state.todoData);
    },
    onCheckTask: (state: any, action: any) => {
      const {idTask} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => task.id === idTask
        ? {... task, completed: !task.completed}
        : task
      )
      saveItem(ITEM_NAME, state.todoData);
    },
    onCheckStep: (state: any, action: any) => {
      const {idTask, idStep} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => task.id === idTask
        ? {... task, steps: task.steps.map((step: any) => step.id === idStep
            ? {... step, completed: !step.completed}
            : step
          )}
        : task
      )
      saveItem(ITEM_NAME, state.todoData);
    },
    onAddStep: (state: any, action: any) => {
      const {idTask, name} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => task.id === idTask
        ? {... task, steps: [...task.steps, {id: uuid(), name, completed: false}]}
        : task
      )
      saveItem(ITEM_NAME, state.todoData);
    },
    setIsModalAddTaskOpen: (state: any, action: any) => {
      state.isModalAddTaskOpen = action.payload;
    },
    editDescription: (state: any, action: any) => {
      const {idTask, description} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => {
        if(task.id === idTask){
          task.description = description;
          return task
        }
        return task
      })
      saveItem(ITEM_NAME, state.todoData);
    },
    editTaskName: (state: any, action: any) => {
      const {idTask, name} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => {
        if(task.id === idTask){
          task.name = name;
          return task
        }
        return task
      })
      saveItem(ITEM_NAME, state.todoData);
    }

  },
});

export const { addTask, setIsModalAddTaskOpen, removeTask, onCheckTask, onAddStep, onCheckStep, editDescription, editTaskName } = todoSlice.actions;
export default todoSlice.reducer;