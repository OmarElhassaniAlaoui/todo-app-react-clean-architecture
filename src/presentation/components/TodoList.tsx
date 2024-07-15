import React from 'react';
import { Todo } from '../../core/entities/Todo';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};