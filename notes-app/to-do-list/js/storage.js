

const STORAGE_KEY = "todos";

export function saveToStorage(key, data) {

    localStorage.setItem(key, JSON.stringify(data));

}


export function getFromStorage(key, defaultValue= []) {

    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : defaultValue;

}

// Save todos whenever they change

export function saveTodos(todos) {

    saveToStorage(STORAGE_KEY, todos);

}



export function loadTodos () {

    return getFromStorage(STORAGE_KEY, []);

}

