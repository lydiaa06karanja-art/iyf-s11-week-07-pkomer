export function formatPrice(cents) {

  return `$${(cents / 100).toFixed(2)}`;
}


export function countRemainingTodos(todos) {

    return todos.filter(function(todo) {
        
        return !todo.completed;
      
})  .length;

}