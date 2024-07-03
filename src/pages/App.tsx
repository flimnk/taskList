import React, { useState } from 'react';
import Form from '../componentes/form';
import Lista from '../componentes/lista';
import  style  from './App.module.scss';
import Cronometro from '../componentes/Cronometro';
import { tarefa } from '../types/tarefa';
import { v4 as uuidv4 } from 'uuid'; 

function App() {

  const [tasks, setTask] = useState<tarefa[]>([])
  const [select, setSelect] = useState<tarefa>()
  
  function selectTask(tarefaSelecionada:tarefa){
  
    
    setSelect(tarefaSelecionada)
    setTask(tarefas => tarefas.map(tarefa => ({...tarefa, selecionado: 
      tarefa.id === tarefaSelecionada.id ? true: false
    })))
    
    }
   function finalizarTarefa(){
      if(select){
        setTask(oldTasks => oldTasks.map(task=> {
          if(task.id === select.id){
            return {...task, selecionado:false, concluido:true }
          }
          return task;
        }))

      }
    }

  return (
    <div className= {style.AppStyle}>
        <Form setTarefas = {setTask}/>
        <Lista  taskList = {tasks} selectTask = {selectTask} />
        <Cronometro finishTask = {finalizarTarefa} selecionado ={select} ></Cronometro>
    </div>

  );
}

export default App;
