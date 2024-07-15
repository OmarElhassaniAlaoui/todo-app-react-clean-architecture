import { Todo } from '../entities/Todo';
import { TodoRepository } from '../repositories/TodoRepository';

export class GetTodos {
  constructor(private todoRepository: TodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }
}