import { Task } from "../entities/Task";
import { TaskStatus } from "../value-objects/taskStatus";

export class TaskDomainService {
  static assignTask(task: Task, userId: string) {
    if (task.status === TaskStatus.DONE) {
      throw new Error("Cannot assign a completed task");
    }
    task.assignedTo = userId;
  }
}
