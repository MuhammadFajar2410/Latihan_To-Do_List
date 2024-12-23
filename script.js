const elDate = document.getElementById("date");
const elTodo = document.getElementById("todo");
const tbody = document.getElementById("tbody");
const form = document.getElementById("form");

const saveToLocalStorage = () => {
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("todoArr");
  return data ? JSON.parse(data) : [];
};

let todoArr = loadFromLocalStorage();

const render = () => {
  tbody.innerHTML = "";

  todoArr.forEach((data, index) => {
    const strikethrough = data.completed ? "strikethrough" : "";
    const checked = data.completed ? "checked" : "";

    tbody.innerHTML += `
    <tr>
      <td class="text-center">${index + 1}</td>
      <td class="text-center"><span class="list-todo date ${strikethrough} " data-index="${index}">${
      data.date
    }</span></td>
      <td><span class="list-todo todo ${strikethrough}" data-index="${index}">${
      data.todo
    }</span></td>
      <td class="action">
        <input type="checkbox" class="checkbox form-control-checkbox" data-index="${index}" ${checked}>
        <button class="btn btn-warning btn-sm btn-edit" data-index="${index}">Edit</button>
        <button class="d-none btn btn-success btn-sm btn-cancel" data-index="${index}">Cancel</button>
        <button class="d-none btn btn-primary btn-sm btn-save" data-index="${index}">Save</button>
        <button class="btn btn-danger btn-sm btn-delete" data-index="${index}">Delete</button>
      </td>
    </tr>
    `;
  });
};

const toggleButtonVisibility = (index, isEdit) => {
  const btnEdit = document.querySelector(`.btn-edit[data-index="${index}"]`);
  const btnSave = document.querySelector(`.btn-save[data-index="${index}"]`);
  const btnCancel = document.querySelector(
    `.btn-cancel[data-index="${index}"]`
  );

  if (isEdit) {
    btnEdit.classList.add("d-none");
    btnSave.classList.remove("d-none");
    btnCancel.classList.remove("d-none");
  } else {
    btnEdit.classList.remove("d-none");
    btnSave.classList.add("d-none");
    btnCancel.classList.add("d-none");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (elDate.value !== "" && elTodo.value !== "") {
    todoArr.push({
      date: elDate.value,
      todo: elTodo.value,
      completed: false,
    });

    render();
    saveToLocalStorage();

    elDate.value = "";
    elTodo.value = "";
  } else {
    alert("Tanggal atau Kegiatan tidak boleh kosong");
  }
});

document.addEventListener("click", (e) => {
  const index = e.target.getAttribute("data-index");
  if (index === null || index == undefined || !todoArr[index]) return;

  const spans = document.querySelectorAll(`.list-todo[data-index="${index}"]`);
  const elDate = document.querySelector(
    `.list-todo.date[data-index="${index}"]`
  );
  const elTodo = document.querySelector(
    `.list-todo.todo[data-index="${index}"]`
  );

  switch (true) {
    // Checkbox
    case e.target.classList.contains("checkbox"):
      todoArr[index].completed = !todoArr[index].completed;
      saveToLocalStorage();
      render();
      break;
    // Edit
    case e.target.classList.contains("btn-edit"):
      toggleButtonVisibility(index, true);
      spans.forEach((span) => span.setAttribute("contentEditable", true));
      break;
    // Save
    case e.target.classList.contains("btn-save"):
      toggleButtonVisibility(index, false);
      spans.forEach((span) => span.removeAttribute("contentEditable"));
      todoArr[index] = { date: elDate.textContent, todo: elTodo.textContent };
      render();
      saveToLocalStorage();
      break;
    // Cancel
    case e.target.classList.contains("btn-cancel"):
      toggleButtonVisibility(index, false);
      spans.forEach((span) => span.removeAttribute("contentEditable"));
      break;
    // Delete
    case e.target.classList.contains("btn-delete"):
      todoArr.splice(index, 1);
      render();
      saveToLocalStorage();
      break;
  }
});

render();
