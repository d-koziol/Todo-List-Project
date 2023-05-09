export default class UI {
  static loadHomepage() {
    UI.newTask();
  }

  static newTask() {
    const addTaskBtn = document.getElementById("addNewTask");
    addTaskBtn.addEventListener("click", () => {
      const form = document.createElement("form");

      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Name:";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.name = "name";
      form.appendChild(nameLabel);
      form.appendChild(nameInput);

      // Dodaj pozostałe pola formularza

      document.body.appendChild(form);
    });
  }
}
