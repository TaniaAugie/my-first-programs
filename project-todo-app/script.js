// CRUD - create, read, update and delete
// {id:1, title:"lets go walk", dueDate:"2024-02-27"}

let getData = JSON.parse(localStorage.getItem("todo"));
let todos = getData || [];

/*if (getData.length > 0) {
  todo = getData;
} else {
  todo = [
    { id: 1, title: "lets go walk", dueDate: "2024-02-27" },
    { id: 2, title: "lets go shopping", dueDate: "2024-02-28" },
  ];
}*/

//let todo = getData;

// add todo

let btn = document.getElementById("btn");

btn.addEventListener("click", addTodo);

function storeData() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

function addTodo() {
  let title = document.getElementById("title").value;
  let dueDate = document.getElementById("dueDate").value;
  let id = new Date().getTime();
  todo.push({ id: id, title: title, dueDate: dueDate });
  document.getElementById("title").value = "";
  storeData();
  render();
}

// update
let indexValue;

function updateTodo(e) {
  e.preventDefault();
  let id = Number(e.target.id);
  let data = todo.filter((todo, index) => {
    indexValue = index;

    return todo.id === id;
  });
  document.getElementById("title").value = data[0].title;
  document.getElementById("btn");
  document.getElementById("btn").style = "display:none";
  let ubtn = document.createElement("button");
  ubtn.textContent = "saveUpdate";
  ubtn.id = "updateId";
  ubtn.onclick = saveTodo;
  let form = document.getElementById("form");
  form.append(ubtn);
}

function saveTodo() {
  document.getElementById("updateId").style = "display:none";
  document.getElementById("btn").style = "display:block";
  let title = document.getElementById("title").value;
  let obj = todo[indexValue];

  todo[indexValue] = { ...obj, title: title };
  storeData();
  document.getElementById("title").value = "";
  render();
}

//delete

function deleteTodo(e) {
  let id = Number(e.target.id);
  todo = todo.filter((todo) => todo.id !== id);
  storeData();
  render();
}

// view/ read display

const render = function () {
  document.getElementById("render").innerHTML = "";
  console.log(todo);
  todo.map((obj) => {
    let div = document.createElement("div");
    console.log(obj);
    div.textContent = obj.title + " " + obj.dueDate;
    let render = document.getElementById("render");
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.id = todo.id;
    updateBtn.style = "margin-left:12px; margin-top:12px";
    updateBtn.onclick = updateTodo;
    div.append(updateBtn);

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete Todo";
    deletebtn.id = todo.id;
    deletebtn.onclick = deleteTodo;

    div.append(deletebtn);

    render.append(div);
  });
};

render();
