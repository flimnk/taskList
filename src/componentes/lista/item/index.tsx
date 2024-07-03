import { spawn } from 'child_process'
import { tarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

    interface Props extends tarefa{
        selectTask:(tarefaSelecionada:tarefa) => void
    }

export  default function Item({tarefa,tempo,selecionado,concluido,id,selectTask}:Props){

    return(
        <li  className = {`${style.item} ${(selecionado  &&  !concluido) ? style.itemSelecionado: ''}
            ${concluido ? style.itemCompletado : ''}
        ` } 
             onClick={()=>{
              
              !concluido &&  selectTask({tarefa,tempo,selecionado,concluido,id})
                    
                 }}>
    
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {concluido && <span className={style.concluido} aria-label='tarefa completada'> </span>}
            
        </li>


    )
}