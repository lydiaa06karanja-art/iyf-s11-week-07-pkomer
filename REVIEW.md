# Peer Code Review - To-Do List App

## Checklist

### Code Quality
- [x] Meaningful variable/function names - Mostly good
- [ ] No magic numbers/strings - Found `10` in task limit
- [x] Functions do one thing
- [x] No deeply nested code > 3 levels
- [x] No duplicate code

### JavaScript Best Practices
- [x] Uses const/let instead of var
- [ ] Proper error handling with try/catch - Missing around JSON.parse
- [x] No unused variables
- [ ] Uses === instead of == - Found == on line checking input

### DOM Manipulation
- [ ] Efficient DOM queries - getElementById called in render loop
- [ ] Event delegation used where possible - Delete buttons have individual listeners
- [x] No memory leaks

### Async Operations
- [ ] N/A - No async code yet

## Specific Comments

**1. Strengths:**
Clean structure! Love that you separated `addTask`, `deleteTask`, and `renderTasks`. Using localStorage is great too.

**2. Suggestions for Improvement:**
1. Replace magic number `10` with `const MAX_TASKS = 10`
2. Change `==` to `===` when checking empty input
3. Wrap `JSON.parse(localStorage.getItem('tasks'))` in try/catch to handle corrupted data
4. Cache DOM element `task-list` outside the render function
5. Use event delegation for delete buttons instead of adding listener to each one

**3. Questions:**
How are you handling if someone types only spaces? Maybe add `.trim()` before checking