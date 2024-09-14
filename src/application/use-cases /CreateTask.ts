import { Task } from "../../domain/entities/Task";
import { TaskPriority } from "../../domain/value-objects/taskPriority";
import { TaskStatus } from "../../domain/value-objects/taskStatus";
import { ITaskRepository } from "../ports/ITaskRepository";

export class CreateTask {
  constructor(private taskRepository: ITaskRepository) {}
  async execute(taskData: {
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date;
    assignedTo: string;
    tenantId: string;
  }) {
    //TODO: write verify / authenticate incoming data

    const task = new Task(
      generateId(),
      taskData.title,
      taskData.description,
      taskData.status,
      taskData.priority,
      taskData.dueDate,
      taskData.assignedTo,
      taskData.tenantId
    );
    await this.taskRepository.createTask(task);
  }
}
function generateId(): string {
  throw new Error("Function not implemented.");
}
