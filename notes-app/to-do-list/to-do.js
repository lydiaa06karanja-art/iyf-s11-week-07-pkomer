
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");


const STORAGE_KEY = "todos";

const FILTER_KEY = "todosFilter";


function saveToStorage(key, data) {

    localStorage.setItem(key, JSON.stringify(data));

}


function getFromStorage(key, defaultValue= []) {

    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : defaultValue;

}

// Save todos whenever they change

function saveTodos(todos) {

    saveToStorage(STORAGE_KEY, todos);

}

// State

let todos = [];

let currentFilter = localStorage.getItem(FILTER_KEY) || "all";

// Create a task element

function createTodoElement(todo) {

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

function renderTodos() {

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

// Updated addTodo function

function addTodo(text) {

    const newTodo = 
    {
        id: Date.now(),  

        text: text,

        completed: false,

        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    
    saveTodos(todos);
    
    renderTodos();
}

// Updated toggleTodo

function toggleTodo(id) {

    const todo = todos.find(t => t.id === id);
    
    if (todo) {

        todo.completed = !todo.completed;

        saveTodos(todos);

        renderTodos();
    }
}

// Updated deleteTodo

function deleteTodo(id) {

    todos = todos.filter(function(todo) {

        return todo.id !== id;

    });

        saveTodos(todos);

        renderTodos();
 
}

// update remainging items

function updateStats() {

    const remaining = todos.filter(function(todo) {
        
        return !todo.completed;
      
})  .length;

itemsLeft.textContent = `${remaining} items left`;

}

// Filter tasks

function filterTodos(filter) {

    currentFilter = filter;

    localStorage.setItem(FILTER_KEY, filter);

     renderTodos();
}

// Submit form

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = input.value.trim();

// Empty tasks not allowed

if (text === "") {

    return;
}

addTodo(text);

// clearinput after adding

input.value = "";

});

// click handling using event delegation

todoList.addEventListener ("click", function(event) {
     
    const li = event.target.closest("li");

    if (!li) {

        return;
    
    }

    const id = Number(li.dataset.id);
     

    // Delet button clicked

     if (event.target.classList.contains('delete-btn')) {

        deleteTodo(id);

     } else {
        
        toggleTodo(id);
     }

    });

     // Filter button
  
    filters.forEach(function(button) {

        button.addEventListener("click", function() {

        filterTodos(button.dataset.filter);
    });
});


// Clear completed tasks

clearCompletedBtn.addEventListener("click", function() {

    todos = todos.filter(function(todo) {

        return !todo.completed;

    });

    saveTodos(todos);

    renderTodos();

});


// Initialize

document.addEventListener("DOMContentLoaded", function() {

    todos = loadTodos();

    renderTodos();

});

function loadTodos () {

    return getFromStorage(STORAGE_KEY, []);

}

