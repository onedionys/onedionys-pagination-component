const assert = require('assert');
const generatePagination = require('../src/pagination');

describe('Pagination Component', () => {
    it('should generate correct pagination array', () => {
        const pagination = generatePagination(5, 10, 5);
        assert.deepStrictEqual(pagination, [3, 4, 5, 6, 7]);
    });

    it('should handle edge cases', () => {
        const pagination1 = generatePagination(1, 5, 5);
        assert.deepStrictEqual(pagination1, [1, 2, 3, 4, 5]);

        const pagination2 = generatePagination(10, 10, 5);
        assert.deepStrictEqual(pagination2, [6, 7, 8, 9, 10]);
    });
});
