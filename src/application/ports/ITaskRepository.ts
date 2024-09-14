import { Task } from "../../domain/entities/Task";

export interface ITaskRepository {
  createTask(task: Task): Promise<void>;
  updateTask(task: Task): Promise<void>;
  getTaskById(taskId: string): Promise<Task | undefined>;
  getTasksByTenant(tenantId: string): Promise<Task[]>;
}
