// CRUD - create, read, update and delete
// {id:1, title:"lets go walk", dueDate:"2024-02-27"}

let todo = [
  { id: 1, title: "lets go walk", dueDate: "2024-02-27" },
  { id: 2, title: "lets go shopping", dueDate: "2024-02-28" },
];

// add todo

let btn = document.getElementById("btn");

btn.addEventListener("click", addTodo);

function addTodo() {
  let title = document.getElementById("title").value;
  let dueDate = document.getElementById("dueDate").value;
  let id = new Date().getTime();
  todo.push({ id: id, title: title, dueDate: dueDate });
  render();
}

// update

function updateTodo(e) {
  e.preventDefault();
  let id = Number(e.target.id);
  let data = todo.filter((todo) => todo.id === id);
}

//delete

// view/ read display

const render = function () {
  document.getElementById("render").innerHTML = "";
  todo.map((todo) => {
    let div = document.createElement("div"); //<div>lets go for walk  duedate</div>
    div.textContent = todo.title + " " + todo.dueDate;
    let render = document.getElementById("render");
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.id = todo.id;
    updateBtn.style = "margin-left:12px; margin-top:12px";
    updateBtn.onclick = updateTodo;
    div.append(updateBtn);

    render.append(div);
  });
};

render();
