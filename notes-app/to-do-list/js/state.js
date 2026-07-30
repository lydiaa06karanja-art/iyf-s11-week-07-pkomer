/* global saveTodos, renderTodos */

const FILTER_KEY = "todosFilter";

// State

export let todos = [];

export let currentFilter = localStorage.getItem(FILTER_KEY) || "all";

// Updated addTodo function

export function addTodo(text) {

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

export function toggleTodo(id) {

    const todo = todos.find(t => t.id === id);
    
    if (todo) {

        todo.completed = !todo.completed;

        saveTodos(todos);

        renderTodos();
    }
}

// Updated deleteTodo

export function deleteTodo(id) {

    todos = todos.filter(function(todo) {

        return todo.id !== id;

    });

        saveTodos(todos);

        renderTodos();
 
}

// Filter tasks

export function filterTodos(filter) {

    currentFilter = filter;

    localStorage.setItem(FILTER_KEY, filter);

     renderTodos();
}