import { faTasks } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react'

const EditTodoform = ({editTodo,task}) => {
    const [value,setValue]=useState(task.task)
    const handleSubmit=(e)=>{
        // handle the page reload preventDefault is used
        e.preventDefault();
        editTodo(value,task.id)
        setValue("")
    }
      return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='update task' onChange={(e)=>setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update task</button>
      </form>
    </div>
  )
}

export default EditTodoform
