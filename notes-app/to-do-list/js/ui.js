/* global todos, currentFilter, todoList, itemsLeft */

// Create a task element

export function createTodoElement(todo) {

    const li = document.createElement ("li");

    li.textContent = todo.text;

    li.dataset.id = todo.id;


// Completed styling

if (todo.completed) {

    li.classList.add("completed");
}

//Delete button

const deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.classList.add("delete-btn");

li.appendChild(deleteBtn);

return li;
}


export function renderTodos() {

    todoList.innerHTML = "";

let filteredTodos = todos;

if (currentFilter === "active") {

    filteredTodos = todos.filter(todo => !todo.completed);

     
} 

else if (currentFilter === "completed") {

    filteredTodos = todos.filter(todo => todo.completed);
}


filteredTodos.forEach(function(todo) {

    const li = createTodoElement(todo);

    todoList.appendChild(li);
});

updateStats();

}

// update remainging items

export function updateStats() {

    const remaining = todos.filter(function(todo) {
        
        return !todo.completed;
      
})  .length;

itemsLeft.textContent = `${remaining} items left`;

}
