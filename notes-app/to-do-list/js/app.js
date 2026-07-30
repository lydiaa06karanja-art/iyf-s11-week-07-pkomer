
/* global todos, saveTodos, renderTodos, addTodo, deleteTodo, toggleTodo, filterTodos, loadTodos */

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

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

    todos.splice(0, todos.length, ...todos.filter(function(todo) {

        return !todo.completed;

    }));

    saveTodos(todos);

    renderTodos();

});


// Initialize

document.addEventListener("DOMContentLoaded", function() {

    todos.splice(0, todos.length, ...loadTodos());


    renderTodos();

});

