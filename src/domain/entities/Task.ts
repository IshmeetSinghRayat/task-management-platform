import { TaskPriority } from "../value-objects/taskPriority";
import { TaskStatus } from "../value-objects/taskStatus";

export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public status: TaskStatus,
    public priority: TaskPriority,
    public dueDate: Date,
    public assignedTo: string,
    public tenantId: string
  ) {}

  changeStatus(newStatus: TaskStatus) {
    this.status = newStatus;
  }
}
