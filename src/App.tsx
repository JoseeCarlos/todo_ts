import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calculator } from './components/test';
import ClassComponente from './components/testComponents/ClassComponent';
import {FunctionComponent} from './components/testComponents/FunctionComponent';
import { Card } from './components/testComponents/Card';
import { Todo } from './module/Todo/Todo';
import { Counter } from './components/testComponents/TestReducer';

function App() {
  //hocks

  const [showClassComponent, setShowClassComponent] = React.useState(true);
  const [showFunctionComponent, setShowFunctionComponent] = React.useState(true);

  const onChangeFuction = (msg: string) => {
    console.log('onChangeFuction', msg);
  }

  const list = [
    1,2,3,4,5,6,7,8,9,10,
  ]
  return (
    // <div className="App">
    //   {showClassComponent && <ClassComponente message="hello world" />}
    //   {showFunctionComponent && (<>
    //     <FunctionComponent message="hello world" onChange={onChangeFuction} />
    //     <Calculator  />
    //   </>
    //   )}
      

    //   <button onClick={() => setShowClassComponent(false)}>Ocultar</button>
    //   <button onClick={() => setShowFunctionComponent(false)}>Ocultar</button>

    //   <Card color="yellow">
    //     Hola esto es una tarjeta
    //   </Card>
    //   {list.map((e:number) =>  <li>{e}</li> )}

    //   <Todo></Todo>
    //   <ul></ul>
    // </div>
    // <div>
    //   <Todo></Todo>
    //   <FunctionComponent message="hello world" onChange={onChangeFuction}/>
    // </div>
    <div className='App'>
      <Todo></Todo>
      {/* <Counter></Counter> */}
    </div>
    
  );
} // end App

export default App;
