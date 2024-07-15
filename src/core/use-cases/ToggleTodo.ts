import { TodoRepository } from '../repositories/TodoRepository';

export class ToggleTodo {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string): Promise<void> {
    await this.todoRepository.toggle(id);
  }
}