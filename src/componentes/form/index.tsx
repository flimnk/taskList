import React, { useCallback, useState }  from "react";
import Botao from "../button";
import style from './form.module.scss'
import { tarefa } from "../../types/tarefa";
import { set } from "date-fns";
import { v4 as uuidv4 } from 'uuid'; 
import { stat } from "fs";


interface Props{
    setTarefas:React.Dispatch<React.SetStateAction<tarefa[]>>
}

export default function Form({setTarefas}:Props){
    const  [tarefa, setTarefa]  = useState('')
    const  [tempo , setTempo] =  useState('00:00')

   function adicionarTarefa(event:React.FormEvent){
        event.preventDefault();
        setTarefas(tarefasAntigas  => tarefasAntigas =[...tarefasAntigas,{
            tarefa:tarefa,tempo:tempo, concluido:false,
             selecionado:false,id:uuidv4()}])

        
    }
    function   clearForm(){
        setTarefa('')
        setTempo('00:00')

    }
    
    
    
    return(
       
        <form className={style.novaTarefa} onSubmit={event=>{
            adicionarTarefa(event)
            clearForm()
            }}>
                
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma nova Tarefa
                    </label>
                    <input 
                        onChange={(event)=>{
                           setTarefa( event.target.value )
                        }}
                        type="text"
                        name="tarefa"
                        value={tarefa}
                        id="tarefa"
                        placeholder="O que voce deseja Estudar"
                        required
                    />
                </div >
    
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma nova Tarefa
                    </label>
                    <input 
                        onChange={(event)=>{
                          setTempo(event.target.value)
                          
                        }}
                        type="time"
                        name="tempo"
                        id="tempo"
                        value={tempo}
                        step="1"
                        min="00:00:00"
                        max= "01:30:00"   
                        required
                    />
                </div>
               
                <Botao type = 'submit'>Adicionar</Botao>
               
        </form>
           
            )
}



