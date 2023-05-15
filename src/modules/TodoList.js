import Task from "./Task";
import UI from "./UI";

export default class TodoList {
  static tasksArr = [];

  static addTask(taskName, taskDate, taskImportancy) {
    const task = new Task(taskName, taskDate, taskImportancy);
    this.tasksArr.push(task);
    console.log(this.tasksArr);
  }
}
