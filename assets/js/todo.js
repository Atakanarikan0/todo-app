themeBtn.addEventListener("click" , changeTheme);
btnClear.addEventListener("click", handleClearBtn);
addTodo.addEventListener("click", allChecked)

let headerBg = document.querySelector("body");
let todoItems = document.querySelectorAll(".todo-list-item")
let todoInfo = document.querySelector('.todo-info').children[0];
todoInfo.innerText = `${todoItems.length} items left`

const todoList = document.querySelector(".todo-list");
const buttonGroup = document.querySelector(".todo-info")
const btns = document.querySelector(".btn-group")


inputTodo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if(inputTodo.value.trim() != "") {
      let newTodo = inputTodo.value;
      todoList.innerHTML +=
        `<li class="todo-list-item">
          <input type="checkbox">
          <h6>${newTodo}</h6>
          <button><img src="assets/img/x-icon.svg" alt=""></button>
          </li>`; 

      inputTodo.value = "";
      todoInfo.innerText = `${document.querySelectorAll(".todo-list-item").length} items left`

   }else {
      inputTodo.style.border = "1px solid red"
      inputTodo.placeholder = "Lütfen geçerli adres giriniz"
   }
  }
  
});


function changeTheme() {
  headerBg.classList.toggle("dark-mode");
  inputTodo.classList.toggle("dark-mode-input");
  buttonGroup.classList.toggle("bg-dark")
  btns.classList.toggle("bg-dark")
  todoItems.forEach(function(add) {
    add.classList.toggle("bg-dark");
  })
  if(headerBg.classList.contains('dark-mode')) {
    themeImg.src= "assets/img/sun-icon.svg"
  }else {
    themeImg.src= "assets/img/moon-icon.svg"
  }
}


function handleClearBtn() {
  // todoItems.forEach(item => item.remove());
  
  todoList.innerText = '';
  todoInfo.innerText = `${document.querySelectorAll(".todo-list-item").length} items left`
}

function handleClearItem() {
  // console.log(this.parentElement);
  this.parentElement.remove()
  todoInfo.innerText = `${document.querySelectorAll(".todo-list-item").length} items left`

}
function allChecked() {
  const isChecked = addTodo.checked;
  const todoCheckboxes = document.querySelectorAll(".todoCompleted");
  for (const checkbox  of todoCheckboxes) {
    checkbox.checked = isChecked; 
  }

}

