import Logo from '../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './Header.module.css'
import { FormEvent, useState, ChangeEvent } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title)
    setTitle('')
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Todo List Logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input 
          value={title} 
          onChange={onChangeTitle} 
          placeholder='Adicione uma nova tarefa' 
        />
        
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        
        </button>
      </form>
    </header>
  )
}