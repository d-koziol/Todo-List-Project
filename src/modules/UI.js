export default class UI {
  static loadHomepage() {
    UI.newTask();
  }

  static newTask() {
    const addTaskBtn = document.getElementById("addNewTask");
    addTaskBtn.addEventListener("click", () => {
      console.log("dupa");
    });
  }
}
