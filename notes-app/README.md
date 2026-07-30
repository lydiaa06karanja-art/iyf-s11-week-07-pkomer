# Week 14: Code Quality and Unit Testing

## Author

- **Name:** Purity Komer
- **GitHub:** [@pkomer](https://github.com/pkomer)
- **Date:** August 1, 2026

## Project Description

This assignment focused on learning about local storage basics, create a simple notes app, upgrade my To-Do list, learning about session storage, state management patterns, building shopping cart, code organization, clean code practices, debugging skills, ESLint & Prettier setup, unit tests and peer code review.

## Technologies Used

- HTML
- JavaScript (ES6)
- Node.js
- npm
- ESLint
- Prettier
- Vitest

## Features

- Configured ESLint to detect coding errors and warnings.
- Configured Prettier for automatic code formatting.
- Added npm scripts to lint, fix linting problems, format code, and test it.
- Moved pure functions to a different module.
- Wrote automated unit tests using Vitest.
- All unit tests were passed successfully.

## How to Run

1. Navigate to the project folder.

```bash
cd notes-app/to-do-list
```

2. Install dependencies.

```bash
npm install
```

3. Run ESLint.

```bash
npm run lint
```

4. Automatically fix lint issues.

```bash
npm run lint:fix
```

5. Format the project.

```bash
npm run format
```

6. Run unit tests.

```bash
npm test
```

## Lessons Learned

- How to start and manage a Node.js project with the help of npm.
- How to set up and make use of ESLint to detect coding problems.
- How to set up and utilize Prettier to ensure proper formatting of code.
- How to write clean code.
- How to derive pure functions from an existing project.
- How to write and run automated unit tests with Vitest.
- How to test edge cases for improved code reliability.

## Challenges Faced

- Understanding ESLint errors and warnings and learning how to resolve them.
- Separating pure functions from the existing To-Do List application for testing.
- Learning how Vitest organizes tests using `describe()`, `it()`, and `expect()`.
- Resolving test failures by ensuring all required functions were properly exported before running the tests.

## Live Demo (Optional)

[Debugging](https://github.com/pkomer/iyf-s11-week-07-pkomer/tree/main/notes-app/debug)
[Shopping Cart](https://github.com/pkomer/iyf-s11-week-07-pkomer/tree/main/notes-app/Shopping%20Cart)
[Contact Form](https://github.com/pkomer/iyf-s11-week-07-pkomer/tree/main/notes-app/to-do-list)
