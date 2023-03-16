import { Injectable } from '@angular/core';

export interface Task {
 id: number;
 value: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(value: string): Task[] {
    if (this.tasks.length > 0)
     this.tasks.push({id: this.tasks[this.tasks.length - 1].id + 1, value: value});
    else
     this.tasks.push({id: 1, value: value});

    return this.tasks;
  }

  updateTask(task: Task) {
  }

  deleteTask(id: number) {
    function d(t: Task) {
      return t.id != id;
    }

    let t = this.tasks.filter(d);

    //for (let i in t)
    // t[i].id = i + 1;

    this.tasks = t;
  }
}
