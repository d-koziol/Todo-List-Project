import Task from "./Task.js";
import TodoList from "./TodoList.js";
export default class UI {
  static loadHomepage() {
    UI.newTask();
  }

  static newTask() {
    const addTaskBtn = document.getElementById("add-new-task");
    const projectsView = document.querySelector(".projects-view");
    addTaskBtn.addEventListener("click", () => {
      const taskForm = document.createElement("form");
      addTaskBtn.classList.add("active");
      taskForm.setAttribute("id", "new-task-popup");
      taskForm.innerHTML += `
          <input class="input-name-task-popup"
            id="input-name-task-popup""
            type="text"
            placeholder="New Quest Name"
          />
          <br>
          <input class="input-date-task-popup"
            id="input-date-task-popup""
            type="date"
          />
          <fieldset>
          <legend>How important the quest is ?</legend>
          <div>
          <input id="input-check-task-popup1"
            name="importancy"
            value="important"
            type="radio"
            />
            <label for="input-check-task-popup1"
            name="input-check-task-popup">Important</label>
          <input id="input-check-task-popup2"
            value="not-important"
            name="importancy"
            type="radio"
            />
            <label for="input-check-task-popup2"
            name="input-check-task-popup" >It can wait</label>
          </div>
          </fieldset>
          <br>
          <button type="submit" value="submit">Submit</button>
          <button type="reset" valuer="reset">Reset</button>
      
      `;
      projectsView.appendChild(taskForm);

      if (addTaskBtn.classList.contains("active")) {
        addTaskBtn.disabled = true;
      }
      UI.addNewTask();
    });
  }

  static addNewTask() {
    const taskForm = document.querySelector("form");
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskName = document.getElementById("input-name-task-popup").value;
      const taskDate = document.getElementById("input-date-task-popup").value;
      const taskImportancy = document.querySelector(
        'input[name="importancy"]:checked'
      ).value;
      const task1 = new Task(taskName, taskDate, taskImportancy);
      console.log(task1);

      taskForm.reset();
      TodoList.addTask(taskName, taskDate, taskImportancy);
    });
  }
}
