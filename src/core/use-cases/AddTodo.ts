import { Todo } from '../entities/Todo';
import { TodoRepository } from '../repositories/TodoRepository';

export class AddTodo {
  constructor(private todoRepository: TodoRepository) {}

  async execute(title: string): Promise<void> {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    await this.todoRepository.add(newTodo);
  }
}