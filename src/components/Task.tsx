import { ITask } from '../App'
import styles from './Task.module.css'
import { TbTrash } from 'react-icons/tb' 
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({task, onDelete, onComplete}: Props) {
  return (
    <div className={styles.task}>
      <button 
        onClick={() => onComplete(task.id)} 
        className={styles.checkContainer}>

        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />  }
      
      </button>
      
      <p className={task.isCompleted ? styles.textCompleted : ''}>
          {task.title}
      </p>

      <button 
        onClick={() => onDelete(task.id)} 
        className={styles.deleteButton}>
          <TbTrash size={20} />
      </button>
    </div>
  )
}