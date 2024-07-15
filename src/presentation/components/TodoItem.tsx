import React from 'react';
import { Todo } from '../../core/entities/Todo';
import styles from './TodoItem.module.css';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      <span className={`${styles.title} ${todo.completed ? styles.completed : ''}`}>
        {todo.title}
      </span>
      <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};