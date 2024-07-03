import React, { useState } from "react";
import style from './lista.module.scss'
import  Item from "./item";
import { tarefa } from "../../types/tarefa";

interface Props{
        taskList: tarefa[],
        selectTask:(tarefaSelecionada:tarefa) => void
}

function Lista({taskList ,selectTask}:Props){
  
    return(
        <aside className ={style.listaTarefas}>
        <h2>  Estudos do dia </h2>
        <ul>
            {taskList.map((tarefa) =>(   
                    
                    <Item
                      tarefa= {tarefa.tarefa}
                      tempo = {tarefa.tempo}
                      concluido = {tarefa.concluido}  
                      selecionado = {tarefa.selecionado}  
                      id = {tarefa.id}
                      key={tarefa.id}
                      selectTask = {selectTask} 
                    />
                    
            ))}
       
        </ul>
      </aside>
          
    )
} 
export default Lista