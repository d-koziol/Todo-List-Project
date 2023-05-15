import Task from "./Task";
import UI from "./UI";

export default class TodoList {
  static addTask(taskName, taskDate, taskImportancy) {
    const tasksArr = [];
    const task = new Task(taskName, taskDate, taskImportancy);
    tasksArr.push(task);
    console.log(tasksArr);
  }
}
