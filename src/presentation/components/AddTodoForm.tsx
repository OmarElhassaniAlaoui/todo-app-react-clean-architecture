import React, { useState } from 'react';
import styles from './AddTodoForm.module.css';

interface Props {
  onAdd: (title: string) => void;
}

export const AddTodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
};