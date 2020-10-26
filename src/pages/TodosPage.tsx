import React, { useEffect, useState} from 'react'
import { TodoForm } from '../compoenents/TodoForm'
import { TodoList } from '../compoenents/TodoList';
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
      }, [])
    
    
      const [todos, setTodos] = useState<ITodo[]>([])
      const addHandler = (title: string) => {
        const newTodo: ITodo = {
          title: title,
          id: Date.now(),
          completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev]);
      }
    
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
    
    
      const toggleHandler = (id: number) => {
        setTodos(prev =>
          prev.map(todo => {
            if (todo.id === id) {
              return {
                ...todo, completed: !todo.completed
              }
            }
            return todo
          }))
      }
    
      const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Delete task ?');
        if (shouldRemove)
          setTodos(prev => prev.filter(todo => todo.id !== id));
      }
    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}