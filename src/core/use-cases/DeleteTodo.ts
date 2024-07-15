import { TodoRepository } from '../repositories/TodoRepository';

export class DeleteTodo {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}