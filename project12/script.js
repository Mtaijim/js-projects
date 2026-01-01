const InputBox = document.getElementById("inputBox");
const Addbtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");

let edittodo = null;
const addtodo = () => {
  const Inputtext = InputBox.value.trim();
  if (Inputtext.length <= 0) {
    return alert(" Add something ");
  }
  if (Addbtn.value === "Edit") {
    edittodo.innerHTML = Inputtext;
    Addbtn.value = "Add";
    InputBox.value = "";
    updateLocalstorage();
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = Inputtext;
    li.appendChild(p);
    todoList.appendChild(li);

    // edt btn
    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn", "editbtn");
    li.appendChild(editbtn);
    InputBox.value = "";
    // deletebtn
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn", "deletebtn");
    li.appendChild(deletebtn);
    saveToLocalStorage(Inputtext);
  }
};
const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
    updateLocalstorage();
  }
  if (e.target.innerHTML === "Edit") {
    InputBox.value = e.target.previousElementSibling.innerHTML;
    InputBox.focus();
    Addbtn.value = "Edit";
    edittodo = e.target.previousElementSibling;
  }
};

// save to local storage
const updateLocalstorage = () => {
  const todos = [];
  document.querySelectorAll("#todoList li p ").forEach((p) => {
    todos.push(p.innerHTML);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const saveToLocalStorage = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getlocaltodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = todo;
      li.appendChild(p);
      todoList.appendChild(li);
      // edt btn
      const editbtn = document.createElement("button");
      editbtn.innerText = "Edit";
      editbtn.classList.add("btn", "editbtn");
      li.appendChild(editbtn);
      InputBox.value = "";
      // deletebtn
      const deletebtn = document.createElement("button");
      deletebtn.innerText = "Remove";
      deletebtn.classList.add("btn", "deletebtn");
      li.appendChild(deletebtn);
      saveToLocalStorage(Inputtext);
    });
  }
};

document.addEventListener("DOMContentLoaded", getlocaltodos);
Addbtn.addEventListener("click", addtodo);
todoList.addEventListener("click", updateTodo);
