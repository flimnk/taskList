import Botao from "../button";
import Relogio from "./Relogio";
import style from './StopWatch.module.scss'
import { tarefa } from "../../types/tarefa";
import { set } from "date-fns";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/usefull/time";
import { v4 as uuidv4 } from 'uuid'; 

interface Props{
    selecionado:tarefa | undefined
    finishTask:() => void

}

export default function Cronometro({selecionado , finishTask}:Props){
    const [tempo,setTempo]= useState<number>();

    
    useEffect(()=>{
            if(selecionado?.tempo){
                setTempo(timeToSeconds(selecionado.tempo))
            }}
            ,[selecionado])
         
            function  regressiva(contador:number = 0){
                    setTimeout(()=>{
                        if(contador>0){
                            setTempo(contador-1)
                            return regressiva(contador-1)
                         }
                         finishTask()
               
                    },

                    1000    
                    )
            }
           
    return(
        
        <div className={style.cronometro}>
               
                <p className={style.titulo}>Escolha um card e inicie um cronômetro</p>

                <div  className={style.relogioWrapper}>
                    <Relogio time = {tempo}/>
                </div>
                <Botao onClick ={()=>{
                    regressiva(tempo)
                }}>
                    Começar
                </Botao>
        
        </div>
        )
}