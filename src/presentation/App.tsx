import React, { useState, useEffect } from 'react';
import { Todo } from '../core/entities/Todo';
import { GetTodos } from '../core/use-cases/GetTodos';
import { AddTodo } from '../core/use-cases/AddTodo';
import { ToggleTodo } from '../core/use-cases/ToggleTodo';
import { DeleteTodo } from '../core/use-cases/DeleteTodo';
import { LocalStorageTodoRepository } from '../data/LocalStorageTodoRepository';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import styles from './App.module.css'; 

const todoRepository = new LocalStorageTodoRepository();
const getTodos = new GetTodos(todoRepository);
const addTodo = new AddTodo(todoRepository);
const toggleTodo = new ToggleTodo(todoRepository);
const deleteTodo = new DeleteTodo(todoRepository);

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const fetchedTodos = await getTodos.execute();
    setTodos(fetchedTodos);
  };

  const handleAddTodo = async (title: string) => {
    await addTodo.execute(title);
    fetchTodos();
  };

  const handleToggleTodo = async (id: string) => {
    await toggleTodo.execute(id);
    fetchTodos();
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo.execute(id);
    fetchTodos();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};