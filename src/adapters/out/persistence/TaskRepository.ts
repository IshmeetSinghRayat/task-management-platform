import { ITaskRepository } from "../../../application/ports/ITaskRepository";
import { Task } from "../../../domain/entities/Task";

export class InMemoryTaskRepository implements ITaskRepository {
  private tasks: Task[] = [];

  async createTask(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async updateTask(task: Task): Promise<void> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  async getTaskById(taskId: string): Promise<Task | undefined> {
    return this.tasks.find((task) => task.id === taskId) || undefined;
  }

  async getTasksByTenant(tenantId: string): Promise<Task[]> {
    return this.tasks.filter((task) => task.tenantId === tenantId);
  }
}
