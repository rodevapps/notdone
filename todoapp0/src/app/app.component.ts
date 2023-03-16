import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TODO App';

  tasks: Task[] = this.taskService.getTasks();

  ntask = new FormControl('');

  constructor(
    private taskService: TaskService,
  ) {}

  onEnter(e: any): void {
    e.preventDefault();

    this.tasks = this.taskService.addTask(this.ntask.value as string);

    this.ntask.setValue('');
  }

  onDelete(): void {
    //this.tasks = this.taskService.deleteTask(id);
  }

  onEdit(): void {
    //this.tasks = this.taskService.updateTask(t);
  }
}
