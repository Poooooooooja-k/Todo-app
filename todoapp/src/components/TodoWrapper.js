import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuid4 } from 'uuid';
import Todo from './Todo';
import EditTodoform from './EditTodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuid4(), task: todoText, isCompleted: false, isEditing: false },
    ]);
  };
  const toggleComplete=id=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,isCompleted:!todo.isCompleted}:todo))
    console.log(todos)
  }

  const deleteTodo = id =>{
    setTodos(todos.filter(todo=>todo.id!==id ))
  }

  const editTodo=id=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
  }
  const editTask = (newTask, id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask, isEditing: !todo.isEditing } : todo)));
  };
  
  return (
    <div className='TodoWrapper'>
        <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ?(
            <EditTodoform editTodo={editTask} task={todo}/>
        ):(
            <Todo task={todo} key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo} editTodo={editTodo}/> 
        )
        
      ))}
    </div>
  );
};

export default TodoWrapper;
