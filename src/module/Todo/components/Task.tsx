import { BaseSyntheticEvent, FC, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/form/Input"
import { Box } from "../../../components/layout/Box"
import { Text } from "../../../components/text"
import { removeTask, onCheckTask, onAddStep, editDescription, editTaskName } from "../../../redux/todo"
import { TaskType } from "../../../types/Task"
import { uuid } from "../../../utils"
import { COLOR } from "../../../utils/theme"
import { Step } from "./Step"

const AddStepContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const TaskContainer = styled.div`
  background-color: ${COLOR.light};
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 3px 8px rgb(0 0 0 / 30%);
`
const TaskWrapper = styled.div`
  display: flex;
`
const TaskArrow = styled.i`
  cursor: pointer;
  font-size: 1.2rem;
  color: ${COLOR.text};
  margin-right: 1rem;
`
const TaskDetail = styled.div`
  background-color: rgba(0,0,0,0.1);
  padding: 1rem;
  margin-top: 0.5rem;
`

type TaskProps = {
  task: TaskType,
}

export const Task: FC<TaskProps> = ({ task }) =>{
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const [newStep, setNewStep] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [newName, setNewName] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddStep = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if(newStep.length > 0){
      dispatch(onAddStep({idTask: task.id, name: newStep}));
      setNewStep('');
    }else{
      alert('El nombre del paso no puede estar vacío');
    }
   
  }


  const handleEditDescription = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (newDescription.length > 0) {
      dispatch(editDescription({ idTask: task.id, description: newDescription }));
      setNewDescription('');
      setShowDescription(false);
    }
    else {
      alert('La descripción no puede estar vacía');
    }
  }

  const handleEditName = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if(newName.length > 0){
      dispatch(editTaskName({idTask: task.id, name: newName}));
      setNewName('');
      setShowText(false);
    }
    else{
      alert('El nombre no puede estar vacío');
    }
  }


  const changeEdit =() => {
    setShowDescription(!showDescription);
  }

  

  return (
    <TaskContainer>
      <TaskWrapper>
        <TaskArrow
          className={`fas fa-angle-${showDetails ? 'up' : 'down'}`}
          onClick={() => setShowDetails((sd: boolean) => !sd)}
        />
        {!showText && (
          <Text onClick={() =>{ setShowText(true) } } style={{flex: 1}}>
          {task.name}
         </Text>
        )}
        {showText && (
          <form onSubmit={handleEditName}>
          <Input  value={newName} onChange={(value) => setNewName(value)} placeholder="Nuevo Nombre"/>
          <Button style={{flex: 1}} type="submit" small>Cambiar Nombre</Button>
          <Button style={{flex: 1}} onClick={() =>{ setShowText(false) } } type="submit" small>Cancelar</Button>
          
        </form>
        )}
        
        
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(onCheckTask({idTask: task.id}))}
        />
      </TaskWrapper>
      {showDetails && (
        <TaskDetail>
          {task.steps.map((step: any) => (
            <Step
              step={step}
              key={step.id}
              taskId={task.id}
            />
          ))}
          <form onSubmit={handleAddStep}>
            <AddStepContainer>
              <div style={{flex: "1 1 0%"}}>
                <Input value={newStep} onChange={(value) => setNewStep(value)} placeholder="Agregar nuevo paso"/>
              </div>
              <Box ml={0.5}>
                <Button type="submit" small>Agregar Paso</Button>
              </Box>
            </AddStepContainer>
          </form>
          <div>
            {showDescription && (
              <form onSubmit={handleEditDescription}>
                <Input value={newDescription} onChange={(value) => setNewDescription(value)} placeholder="Agregar descripción"/>
                <Box ml={0.5}>
                  <Button type="submit" small>Agregar Descripción</Button>
                </Box>
              </form>
            )
              }

            {!showDescription && (
              <div>
                <Text bold my={1}>Descripción:</Text>
                <Text>{task.description}</Text>
                
              </div>
            )}
              <Button onClick={changeEdit}>{ !showDescription ? 'Editar' : 'No editar' }</Button>
            <Button
              onClick={() => dispatch(removeTask({idTask: task.id}))}
              variant="danger"
            >Eliminar</Button>

          </div>
        </TaskDetail>
      )}
    </TaskContainer>
  )
}