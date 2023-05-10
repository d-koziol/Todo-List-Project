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
          <input class="input-add-task-popup"
            id="input-add-task-popup""
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
            type="radio"
            />
          <label for="input-check-task-popup1"
            name="input-check-task-popup" 
            value="important">Important</label>
            <input id="input-check-task-popup2"
            name="importancy"
            type="radio"
          />
          <label for="input-check-task-popup2"
            name="input-check-task-popup" 
            value="not-important">It can wait</label>
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
    });
  }
}
