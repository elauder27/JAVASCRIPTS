const todoList = [
  { name: " wash plates", dueDate: "25-01-2026" },
  { name: "wash dishes", dueDate: "26-01-2026" },
];

renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject; //Destructuring
    //generating the HTML using javascript.
    const html = `
      <p>
      ${name} - ${dueDate}
      <button class="js-delete-todo-button">Delete</button>
      </p>  
      `;
    todoListHTML += html;
  });

  /*for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const { name, dueDate } = todoObject;
    //generating the HTML using javascript.
    const html = `
      <p>
      ${name} - ${dueDate}
      <button onclick="
      todoList.splice(${i}, 1)
      renderTodoList()
      ">Delete</button>
      </p>  
      `;
    todoListHTML += html;
  }
*/
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodoItem();
});

function addTodoItem() {
  const inputItem = document.querySelector(".js-input-todo");
  const name = inputItem.value;

  const addDueDateInput = document.querySelector(".js-duedate-input");
  const dueDate = addDueDateInput.value;
  todoList.push({ name, dueDate });

  inputItem.value = "";

  renderTodoList();
}
