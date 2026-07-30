import { describe, it, expect } from 'vitest';

import { formatPrice, countRemainingTodos } from './format.js';

describe('formatPrice', () => {

  it('formats whole dollars', () => {

    expect(formatPrice(500)).toBe('$5.00');

  });

  it('handles zero', () => {

    expect(formatPrice(0)).toBe('$0.00');

  });

});

describe("countRemainingTodos", () => {

    it("counts incomplete todos", () => {

        const todos = [
            { text: "Study", completed: false },
            { text: "Cook", completed: true },
            { text: "Exercise", completed: false },
        ];

        expect(countRemainingTodos(todos)).toBe(2);
    });

    it("handles empty todo list", () => {
        expect(countRemainingTodos([])).toBe(0);

    });
});
        