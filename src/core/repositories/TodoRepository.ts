import { Todo } from '../entities/Todo';

export interface TodoRepository {
  getAll(): Promise<Todo[]>;
  add(todo: Todo): Promise<void>;
  toggle(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}