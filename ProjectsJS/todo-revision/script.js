let todos = [
  { id: 1, title: "lets go walk", dueDate: "2024-02-27" },
  { id: 2, title: "lets go swimming", dueDate: "2024-02-27" },
];

let btn = document.getElementById("btn");

btn.addEventListener("click", createTodo);

// create

function createTodo(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let dueDate = document.getElementById("date").value;
  let id = new Date().getTime();

  todos.push({ id: id, title: title, dueDate: dueDate });
  document.getElementById("title").value = "";
  renderTodos();
}

//update

let todoIndex;

function updateTodo(e) {
  let updateId = Number(e.target.id);
  let todo = todos.filter((todo, index) => {
    todoIndex = index;
    return todo.id === updateId;
  });
  let title = (document.getElementById("title").value = todo[0].title);

  document.getElementById("btn").style = "display: none";
  let updateBtn = document.createElement("button");
  updateBtn.textContent = "Save update";
  updateBtn.id = "btnu";
  updateBtn.onclick = saveTodoUpdate;
  let form = document.getElementById("form");

  form.append(updateBtn);
}

function saveTodoUpdate() {
  let title = document.getElementById("title").value;
  let todo = todos[todoIndex];
  let newobj = { ...todo, title };
  todos[todoIndex] = newobj;

  document.getElementById("btnu").style = "display:none";
  document.getElementById("btn").style = "display:block";
  document.getElementById("title").value = "";
  renderTodos();
}
function DeleteTodo(e) {
  let delId = Number(e.target.id);
  todos = todos.filter((todo) => todo.id !== delId);
  renderTodos();
}

// display todo READ

function renderTodos() {
  document.getElementById("render").innerHTML = "";
  todos.map((todo, index) => {
    let div = document.createElement("div");
    div.textContent = todo.title + " " + todo.dueDate;

    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.id = todo.id;
    updateBtn.style = "margin: 10px; cursor: pointer; padding: 5px";
    updateBtn.onclick = updateTodo;
    div.append(updateBtn);

    let deleteBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.id = todo.id;
    updateBtn.style = "margin: 10px; cursor: pointer; padding: 5px";
    updateBtn.onclick = updateTodo;
    div.append(deleteBtnBtn);

    let render = document.getElementById("render");
    render.append(div);
  });
}

renderTodos();
