export default class Task {
  constructor(name, dueDate = "No date", importancy) {
    this.name = name;
    this.dueDate = dueDate;
    this.importancy = importancy;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  setImportancy(importancy) {
    this.importancy = importancy;
  }

  getImportancy() {
    return this.importancy;
  }

  getDateFormatted() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${day}/${month}/${year}`;
  }
}
