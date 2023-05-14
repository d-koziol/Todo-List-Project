import Task from "./Task";
import UI from "./UI";

export default class TodoList {
  static addTask() {
    const allQuestsArr = [];
    const todaysQuestsArr = [];
    const thisWeekQuestsArr = [];

    allQuestsArr.push(UI.newTask);
    todaysQuestsArr.push(UI.newTask);
    thisWeekQuestsArr.push(UI.newTask);
  }
}
